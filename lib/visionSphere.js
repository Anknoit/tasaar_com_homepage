import {
  BufferAttribute,
  BufferGeometry,
  Color,
  Clock,
  LineSegments,
  NormalBlending,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  Vector3,
  WebGLRenderer,
} from 'three';

/* Vision sphere — a network drawn as a globe.
   Three layers share one shell, so the silhouette stays the dense particle
   sphere of the reference while the picture itself reads as communication:

     1. dust  — the fine particle shell that gives the form its mass
     2. hubs  — brighter nodes scattered across the same radius
     3. links — great-circle arcs between neighbouring hubs, each carrying
                a signal pulse that runs end to end

   Every layer runs the same vertex displacement, so the cursor deforms the
   cloud, the nodes and the links as one body rather than sliding them
   apart. Displacement lives in the shader: at this point count, moving
   positions on the CPU each frame would cost more than the rest of the
   page combined. Returns a cleanup function. */

const DUST_COUNT = 15000;
const HUB_COUNT = 46;
const LINKS_PER_HUB = 2;
const ARC_SEGMENTS = 25;
const RADIUS = 1.32;
const SHELL = RADIUS * 1.014; /* hubs and arcs ride just outside the dust */

/* ── SHELL PALETTE — tinker here ──
   Two colours, split at the equator: navy over the southern half, the
   site's crimson over the northern half. SPLIT_SOFT is the half-width of
   the blend band around the middle — 0 gives a hard seam, larger values
   spread the changeover further into each half. */
const C_NAVY = new Color(0xFF6DA6D2);
const C_CRIMSON = new Color(0xb01030);
const SPLIT_SOFT = 0.3;

/* The tricolour the shell resolves into every so often. The white band is
   carried as a pale grey: true white would be invisible against the page,
   so the band reads as a lightening between saffron and green rather than
   as a hole in the sphere. */
/* ── TRICOLOUR TIMING — tinker here ──
   One cycle is FLAG_PERIOD seconds long and runs:
     ramp in (FLAG_RAMP) → hold (FLAG_HOLD) → ramp out (FLAG_RAMP) → rest
   so the shell is in the flag for RAMP*2 + HOLD seconds and in its own
   colours for whatever is left. Keep RAMP*2 + HOLD below FLAG_PERIOD or
   the moment never ends; at the values below it is 2.4s of every 5s.
   The colours themselves are in flagColor() further down. */
const FLAG_PERIOD = 8;    /* seconds from one moment to the next */
const FLAG_RAMP = 0.6;    /* seconds to cross into, and out of, the flag */
const FLAG_HOLD = 3;    /* seconds held fully in the tricolour */

/* The displacement every layer shares. Injected into each vertex shader so
   the three layers can never disagree about where the shell is. */
const DISPLACE = `
  uniform float uTime;
  uniform vec3 uPointer;
  uniform float uHover;
  uniform float uFlag;

  vec4 shellWorld(vec3 pos, float seed, out float force) {
    /* idle breathing: a slow radial swell, out of phase per vertex so the
       shell shimmers instead of pulsing as one solid ball */
    float breathe = sin(uTime * 0.6 + seed * 6.2831) * 0.022;
    vec3 p = pos + normalize(pos) * breathe;

    vec4 world = modelMatrix * vec4(p, 1.0);

    /* cursor bloom: vertices near the pointer are pushed away from it,
       falling off with distance so the effect stays a local swell */
    vec3 away = world.xyz - uPointer;
    float d = length(away);
    force = exp(-d * d * 2.8) * uHover;
    world.xyz += normalize(away + 0.0001) * force * 0.26;
    return world;
  }

  /* The tricolour, banded by height on the shell itself (not on screen), so
     the bands stay level while the globe spins. Edges are smoothstepped;
     hard cuts would strobe as particles drift across them. */
  vec3 flagColor(vec3 pos) {
    float y = normalize(pos).y;
    vec3 saffron = vec3(1.0, 0.60, 0.20);
    vec3 band    = vec3(0.86, 0.86, 0.88);
    vec3 green   = vec3(0.07, 0.53, 0.03);
    vec3 c = band;
    c = mix(c, saffron, smoothstep(0.16, 0.34, y));
    c = mix(c, green, smoothstep(-0.16, -0.34, y));
    return c;
  }
`;

const DUST_VERT = `
  uniform float uSize;
  uniform float uPixelRatio;

  attribute float aRand;
  attribute float aScale;
  attribute vec3 aColor;

  varying vec3 vColor;
  varying float vAlpha;

  ${DISPLACE}

  void main() {
    float force;
    vec4 world = shellWorld(position, aRand, force);
    vec4 mv = viewMatrix * world;
    gl_Position = projectionMatrix * mv;

    gl_PointSize = uSize * aScale * uPixelRatio * (1.0 + force * 0.45) * (2.6 / -mv.z);

    vec3 base = mix(aColor, vec3(0.18, 0.66, 0.62), clamp(force * 0.85, 0.0, 0.5));
    vColor = mix(base, flagColor(position), uFlag);
    vAlpha = (0.26 + aRand * 0.30) * (1.0 + force * 0.5) * (1.0 + uFlag * 0.35);
  }
`;

const POINT_FRAG = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    /* round the square point sprite and soften its edge, so the cloud has
       no visible grid of tiny squares at high density */
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.22, d) * vAlpha;
    gl_FragColor = vec4(vColor, a);
  }
`;

/* Hubs beat on their own slow cycle, so the network looks staffed even
   before a signal reaches them. */
const HUB_VERT = `
  uniform float uSize;
  uniform float uPixelRatio;

  attribute float aRand;
  attribute vec3 aColor;

  varying vec3 vColor;
  varying float vAlpha;

  ${DISPLACE}

  void main() {
    float force;
    vec4 world = shellWorld(position, aRand, force);
    vec4 mv = viewMatrix * world;
    gl_Position = projectionMatrix * mv;

    float beat = 0.72 + 0.28 * sin(uTime * 1.6 + aRand * 6.2831);
    gl_PointSize = uSize * uPixelRatio * beat * (1.0 + force * 0.8) * (2.6 / -mv.z);

    vec3 base = mix(aColor, vec3(0.11, 0.70, 0.64), clamp(force * 1.1, 0.0, 0.65));
    vColor = mix(base, flagColor(position) * 0.88, uFlag);
    vAlpha = (0.55 + 0.32 * beat) * (1.0 + force * 0.5);
  }
`;

/* aT is a vertex's position along its arc (0 at one hub, 1 at the other).
   A head travels 0→1 on a per-arc phase and the vertex lights as the head
   passes it — that is the signal running down the link. The arc holds a
   low base alpha the rest of the time, so the topology is always legible
   and only the traffic moves. */
const LINK_VERT = `
  attribute float aT;
  attribute float aPhase;
  attribute float aSpeed;
  attribute vec3 aColor;

  varying vec3 vColor;
  varying float vAlpha;

  ${DISPLACE}

  void main() {
    float force;
    vec4 world = shellWorld(position, aPhase, force);
    vec4 mv = viewMatrix * world;
    gl_Position = projectionMatrix * mv;

    float head = fract(uTime * aSpeed + aPhase);
    float d = abs(aT - head);
    d = min(d, 1.0 - d); /* the head wraps, so the distance to it wraps too */
    float pulse = exp(-d * d * 260.0);

    /* links fade toward their ends so arcs don't terminate in a hard dot
       sitting on top of each hub */
    float ends = smoothstep(0.0, 0.14, aT) * smoothstep(1.0, 0.86, aT);

    vec3 base = mix(aColor, vec3(0.11, 0.72, 0.66), clamp(pulse + force * 0.6, 0.0, 0.85));
    vColor = mix(base, flagColor(position) * 0.8, uFlag * 0.85);
    vAlpha = (0.24 + pulse * 0.72) * ends * (1.0 + force * 0.6);
  }
`;

const LINK_FRAG = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    gl_FragColor = vec4(vColor, vAlpha);
  }
`;

export function initVisionSphere(canvas, hostEl) {
  if (!canvas || !hostEl || !('WebGLRenderingContext' in window)) {
    throw new Error('WebGL unavailable');
  }

  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true });
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(pixelRatio);

  const scene = new Scene();
  const camera = new PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 4.6);

  function resize() {
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  /* Uniforms are shared by reference across the three materials, so the
     pointer and the clock are written once per frame, not three times. */
  const uniforms = {
    uTime: { value: 0 },
    uPointer: { value: new Vector3(0, 0, 10) },
    uHover: { value: 0 },
    uFlag: { value: 0 },
  };

  const tmp = new Color();

  /* Colour by height, the way the reference runs blue at the base into
     magenta at the crown. */
  function rampAt(ny, out) {
    /* smoothstep across the seam rather than a linear fade, so each half
       holds its own colour out to the blend band instead of spending the
       whole hemisphere turning into the other one */
    const e = Math.min(1, Math.max(0, (ny + SPLIT_SOFT) / (SPLIT_SOFT * 2)));
    const t = e * e * (3 - 2 * e);
    return out.copy(C_NAVY).lerp(C_CRIMSON, t);
  }

  /* Uniform points on a sphere: inverse-CDF (acos on a uniform variate),
     not a random angle per axis, which would bunch them at the poles. */
  function sampleDirection() {
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const sinPhi = Math.sin(phi);
    return [sinPhi * Math.cos(theta), Math.cos(phi), sinPhi * Math.sin(theta)];
  }

  /* ---------- 1. dust ---------- */
  const dustPos = new Float32Array(DUST_COUNT * 3);
  const dustCol = new Float32Array(DUST_COUNT * 3);
  const dustRand = new Float32Array(DUST_COUNT);
  const dustScale = new Float32Array(DUST_COUNT);

  for (let i = 0; i < DUST_COUNT; i++) {
    const [nx, ny, nz] = sampleDirection();
    /* a coarse density field, so the shell clumps like the reference
       instead of reading as an even fuzz */
    const clump = 0.5 + 0.5 * Math.sin(nx * 4.1 + ny * 3.3) * Math.cos(nz * 3.7 - ny * 2.2);
    const r = RADIUS + (Math.random() - 0.35) * (0.06 + clump * 0.17);

    dustPos[i * 3] = nx * r;
    dustPos[i * 3 + 1] = ny * r;
    dustPos[i * 3 + 2] = nz * r;

    rampAt(ny, tmp);
    const jitter = 0.82 + Math.random() * 0.24;
    dustCol[i * 3] = Math.min(1, tmp.r * jitter);
    dustCol[i * 3 + 1] = Math.min(1, tmp.g * jitter);
    dustCol[i * 3 + 2] = Math.min(1, tmp.b * jitter);

    dustRand[i] = Math.random();
    /* a few larger grains read as nearer, giving the flat shell depth */
    dustScale[i] = 0.78 + Math.pow(Math.random(), 2.5) * 1.7;
  }

  const dustGeo = new BufferGeometry();
  dustGeo.setAttribute('position', new BufferAttribute(dustPos, 3));
  dustGeo.setAttribute('aColor', new BufferAttribute(dustCol, 3));
  dustGeo.setAttribute('aRand', new BufferAttribute(dustRand, 1));
  dustGeo.setAttribute('aScale', new BufferAttribute(dustScale, 1));

  const dustMat = new ShaderMaterial({
    vertexShader: DUST_VERT,
    fragmentShader: POINT_FRAG,
    transparent: true,
    depthWrite: false,
    /* normal, not additive: additive blending vanishes on a white
       background, since adding light to white stays white */
    blending: NormalBlending,
    uniforms: { ...uniforms, uSize: { value: 3.0 }, uPixelRatio: { value: pixelRatio } },
  });
  const dust = new Points(dustGeo, dustMat);
  scene.add(dust);

  /* ---------- 2. hubs ---------- */
  const hubs = [];
  for (let i = 0; i < HUB_COUNT; i++) {
    const [nx, ny, nz] = sampleDirection();
    hubs.push(new Vector3(nx, ny, nz));
  }

  const hubPos = new Float32Array(HUB_COUNT * 3);
  const hubCol = new Float32Array(HUB_COUNT * 3);
  const hubRand = new Float32Array(HUB_COUNT);

  for (let i = 0; i < HUB_COUNT; i++) {
    const h = hubs[i];
    hubPos[i * 3] = h.x * SHELL;
    hubPos[i * 3 + 1] = h.y * SHELL;
    hubPos[i * 3 + 2] = h.z * SHELL;
    /* hubs sit a shade darker than the dust around them, so they hold
       their own against the cloud rather than dissolving into it */
    rampAt(h.y, tmp).multiplyScalar(0.86);
    hubCol[i * 3] = tmp.r;
    hubCol[i * 3 + 1] = tmp.g;
    hubCol[i * 3 + 2] = tmp.b;
    hubRand[i] = Math.random();
  }

  const hubGeo = new BufferGeometry();
  hubGeo.setAttribute('position', new BufferAttribute(hubPos, 3));
  hubGeo.setAttribute('aColor', new BufferAttribute(hubCol, 3));
  hubGeo.setAttribute('aRand', new BufferAttribute(hubRand, 1));

  const hubMat = new ShaderMaterial({
    vertexShader: HUB_VERT,
    fragmentShader: POINT_FRAG,
    transparent: true,
    depthWrite: false,
    blending: NormalBlending,
    uniforms: { ...uniforms, uSize: { value: 9.0 }, uPixelRatio: { value: pixelRatio } },
  });
  const hubPoints = new Points(hubGeo, hubMat);
  scene.add(hubPoints);

  /* ---------- 3. links ----------
     Each hub reaches for its nearest neighbours, pairs de-duplicated so a
     mutual nearest pair yields one arc rather than two drawn over each
     other. Arcs are slerped along the shell, never chorded through it: a
     straight line between two hubs would cut inside the sphere and read as
     wires in a box instead of routes across a globe. */
  const pairs = [];
  const seen = new Set();
  for (let i = 0; i < HUB_COUNT; i++) {
    const order = [];
    for (let j = 0; j < HUB_COUNT; j++) {
      if (i !== j) order.push({ j, d: hubs[i].distanceToSquared(hubs[j]) });
    }
    order.sort((a, b) => a.d - b.d);
    for (let k = 0; k < LINKS_PER_HUB && k < order.length; k++) {
      const j = order[k].j;
      const key = i < j ? i + ':' + j : j + ':' + i;
      if (seen.has(key)) continue;
      seen.add(key);
      pairs.push([i, j]);
    }

    /* Nearest-neighbour links alone produce a lace of short local hops.
       Every few hubs also throws one long haul to a distant peer, which is
       what makes the globe read as one network rather than as a crust of
       unrelated clusters. */
    if (i % 4 === 0) {
      const far = order[Math.floor(order.length * (0.55 + Math.random() * 0.4))];
      if (far) {
        const key = i < far.j ? i + ':' + far.j : far.j + ':' + i;
        if (!seen.has(key)) {
          seen.add(key);
          pairs.push([i, far.j]);
        }
      }
    }
  }

  const vertsPerArc = ARC_SEGMENTS * 2; /* LineSegments: a pair per span */
  const linkVerts = pairs.length * vertsPerArc;
  const linkPos = new Float32Array(linkVerts * 3);
  const linkCol = new Float32Array(linkVerts * 3);
  const linkT = new Float32Array(linkVerts);
  const linkPhase = new Float32Array(linkVerts);
  const linkSpeed = new Float32Array(linkVerts);

  const va = new Vector3();
  const vb = new Vector3();
  const vp = new Vector3();

  function slerp(from, to, t, out) {
    const dot = Math.min(1, Math.max(-1, from.dot(to)));
    const omega = Math.acos(dot);
    if (omega < 1e-4) return out.copy(from);
    const s = Math.sin(omega);
    const w1 = Math.sin((1 - t) * omega) / s;
    const w2 = Math.sin(t * omega) / s;
    return out.set(
      from.x * w1 + to.x * w2,
      from.y * w1 + to.y * w2,
      from.z * w1 + to.z * w2
    );
  }

  let v = 0;
  for (let n = 0; n < pairs.length; n++) {
    const [i, j] = pairs[n];
    va.copy(hubs[i]);
    vb.copy(hubs[j]);
    const phase = Math.random();
    const speed = 0.16 + Math.random() * 0.26;

    for (let sIdx = 0; sIdx < ARC_SEGMENTS; sIdx++) {
      for (let end = 0; end < 2; end++) {
        const t = (sIdx + end) / ARC_SEGMENTS;
        slerp(va, vb, t, vp).normalize().multiplyScalar(SHELL);
        linkPos[v * 3] = vp.x;
        linkPos[v * 3 + 1] = vp.y;
        linkPos[v * 3 + 2] = vp.z;

        rampAt(vp.y / SHELL, tmp).multiplyScalar(0.78);
        linkCol[v * 3] = tmp.r;
        linkCol[v * 3 + 1] = tmp.g;
        linkCol[v * 3 + 2] = tmp.b;

        linkT[v] = t;
        linkPhase[v] = phase;
        linkSpeed[v] = speed;
        v++;
      }
    }
  }

  const linkGeo = new BufferGeometry();
  linkGeo.setAttribute('position', new BufferAttribute(linkPos, 3));
  linkGeo.setAttribute('aColor', new BufferAttribute(linkCol, 3));
  linkGeo.setAttribute('aT', new BufferAttribute(linkT, 1));
  linkGeo.setAttribute('aPhase', new BufferAttribute(linkPhase, 1));
  linkGeo.setAttribute('aSpeed', new BufferAttribute(linkSpeed, 1));

  const linkMat = new ShaderMaterial({
    vertexShader: LINK_VERT,
    fragmentShader: LINK_FRAG,
    transparent: true,
    depthWrite: false,
    blending: NormalBlending,
    uniforms,
  });
  const links = new LineSegments(linkGeo, linkMat);
  scene.add(links);

  /* ---------- pointer ----------
     Normalised against the canvas box, then placed slightly in front of
     the shell so the bloom reads as the cursor pressing into the cloud. */
  const pointerTarget = new Vector3(0, 0, 10);
  const pointerCurrent = new Vector3(0, 0, 10);
  let hoverTarget = 0;
  let hoverCurrent = 0;
  let tiltX = 0;
  let tiltY = 0;
  let tiltTargetX = 0;
  let tiltTargetY = 0;

  function onPointerMove(ev) {
    const r = canvas.getBoundingClientRect();
    const nx = ((ev.clientX - r.left) / r.width) * 2 - 1;
    const ny = -(((ev.clientY - r.top) / r.height) * 2 - 1);
    /* the visible half of the shell spans roughly ±1.6 world units at this
       camera distance, so the pointer maps straight onto that span */
    pointerTarget.set(nx * 1.75, ny * 1.75, 1.15);
    tiltTargetY = nx * 0.35;
    tiltTargetX = ny * 0.28;
    hoverTarget = 1;
  }
  function onPointerLeave() {
    hoverTarget = 0;
    tiltTargetX = 0;
    tiltTargetY = 0;
  }

  /* Bound to the section, not just the canvas: the cursor approaching from
     the copy side should already be tilting the shell when it arrives. */
  hostEl.addEventListener('pointermove', onPointerMove);
  hostEl.addEventListener('pointerleave', onPointerLeave);

  const reduceMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const clock = new Clock();
  let raf = null;

  function frame() {
    raf = requestAnimationFrame(frame);

    /* nothing to draw while the section is off screen */
    const rect = hostEl.getBoundingClientRect();
    if (rect.bottom <= -150 || rect.top >= window.innerHeight + 150) return;

    const t = clock.getElapsedTime();

    pointerCurrent.lerp(pointerTarget, 0.12);
    hoverCurrent += (hoverTarget - hoverCurrent) * 0.07;
    tiltX += (tiltTargetX - tiltX) * 0.05;
    tiltY += (tiltTargetY - tiltY) * 0.05;

    uniforms.uTime.value = reduceMotion ? 0 : t;
    uniforms.uPointer.value.copy(pointerCurrent);
    uniforms.uHover.value = hoverCurrent;

    /* The tricolour moment: a triangular ramp in and out of a hold, once
       every FLAG_PERIOD seconds. Driven off the clock rather than a timer,
       so it cannot drift out of step with the rest of the animation or keep
       running while the section is scrolled away. */
    const cycle = t % FLAG_PERIOD;
    let flag = 0;
    if (cycle < FLAG_RAMP) flag = cycle / FLAG_RAMP;
    else if (cycle < FLAG_RAMP + FLAG_HOLD) flag = 1;
    else if (cycle < FLAG_RAMP * 2 + FLAG_HOLD) flag = 1 - (cycle - FLAG_RAMP - FLAG_HOLD) / FLAG_RAMP;
    uniforms.uFlag.value = reduceMotion ? 0 : flag;

    const spin = (reduceMotion ? 0 : t * 0.075) + tiltY;
    dust.rotation.y = hubPoints.rotation.y = links.rotation.y = spin;
    dust.rotation.x = hubPoints.rotation.x = links.rotation.x = tiltX;

    renderer.render(scene, camera);
  }
  frame();

  return function cleanup() {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
    hostEl.removeEventListener('pointermove', onPointerMove);
    hostEl.removeEventListener('pointerleave', onPointerLeave);
    dustGeo.dispose();
    hubGeo.dispose();
    linkGeo.dispose();
    dustMat.dispose();
    hubMat.dispose();
    linkMat.dispose();
    renderer.dispose();
  };
}
