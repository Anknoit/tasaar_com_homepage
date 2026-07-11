import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Clock,
  FogExp2,
  Group,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
} from 'three';

/* Hero "universe" — a layered starfield with scroll-driven depth parallax.
   The logo is a plain static <img> in the DOM; this canvas only renders
   the background. Returns a cleanup function. */

export function initHeroScene(canvas, heroSection) {
  if (!canvas || !heroSection || !('WebGLRenderingContext' in window)) {
    throw new Error('WebGL unavailable');
  }

  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new Scene();
  scene.fog = new FogExp2(0x04040a, 0.018);

  const BASE_CAM_Z = 6;
  const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 0, BASE_CAM_Z);

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  /* ---------- soft round point texture (no external asset) ---------- */
  function makeDotTexture() {
    const size = 64;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.4, 'rgba(255,255,255,.7)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    return new CanvasTexture(c);
  }
  const dotTexture = makeDotTexture();

  /* A tighter, near-hard point for the stars themselves — the soft
     wide-glow dot above (still used for the nebula haze) read as fuzzy
     bokeh balls rather than pinpoint stars once there were enough of
     them on screen. */
  function makeStarTexture() {
    const size = 32;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.25, 'rgba(255,255,255,.85)');
    g.addColorStop(0.55, 'rgba(255,255,255,.12)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    return new CanvasTexture(c);
  }
  const starTexture = makeStarTexture();

  /* Box–Muller transform — used to bunch stars into clusters with a
     dense core and a falloff, instead of an even scatter. */
  function gaussianRandom() {
    const u = 1 - Math.random();
    const v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }

  /* ---------- layered starfield (depth = parallax) ---------- */
  /* Sized up from the previous pass (which went crisp but read as too
     sparse/small) while keeping the tight-falloff texture so they stay
     pinpoints, not glow blobs. More clusters than the last pass (and a
     slightly lower clustered fraction) so clumps are spread across the
     whole field instead of leaving large empty gaps between just 3-4 of
     them. */
  const LAYERS = [
    { count: 1400, spread: 90, zRange: [-70, -45], size: 0.1, opacity: 0.45, parallax: 0.6, clusters: 7, clusterRadius: 6 },
    { count: 950, spread: 70, zRange: [-42, -22], size: 0.14, opacity: 0.6, parallax: 1.4, clusters: 6, clusterRadius: 5 },
    { count: 480, spread: 50, zRange: [-20, -6], size: 0.19, opacity: 0.8, parallax: 2.4, clusters: 5, clusterRadius: 4 },
  ];

  const starGroups = LAYERS.map((layer) => {
    const clusterCenters = Array.from({ length: layer.clusters }, () => ({
      x: (Math.random() - 0.5) * layer.spread,
      y: (Math.random() - 0.5) * layer.spread,
    }));

    const positions = new Float32Array(layer.count * 3);
    const colors = new Float32Array(layer.count * 3);
    for (let i = 0; i < layer.count; i++) {
      let x, y;
      /* ~62% of stars belong to a cluster (dense core, gaussian falloff);
         the rest scatter freely as background field stars, matching how
         real star fields read — clumps within a broader scatter, not
         either a uniform field or tidy separate blobs. */
      if (Math.random() < 0.62) {
        const c = clusterCenters[(Math.random() * clusterCenters.length) | 0];
        x = c.x + gaussianRandom() * layer.clusterRadius;
        y = c.y + gaussianRandom() * layer.clusterRadius;
      } else {
        x = (Math.random() - 0.5) * layer.spread;
        y = (Math.random() - 0.5) * layer.spread;
      }
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = layer.zRange[0] + Math.random() * (layer.zRange[1] - layer.zRange[0]);

      /* mostly neutral/cool-white points, an occasional warm one — real
         starlight isn't perfectly monochrome */
      const r = Math.random();
      if (r > 0.93) { colors[i * 3] = 1; colors[i * 3 + 1] = 0.92; colors[i * 3 + 2] = 0.78; }
      else if (r > 0.78) { colors[i * 3] = 0.82; colors[i * 3 + 1] = 0.88; colors[i * 3 + 2] = 1; }
      else { colors[i * 3] = 1; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 1; }
    }
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    geometry.setAttribute('color', new BufferAttribute(colors, 3));
    const material = new PointsMaterial({
      map: starTexture,
      size: layer.size,
      vertexColors: true,
      transparent: true,
      opacity: layer.opacity,
      depthWrite: false,
      blending: AdditiveBlending,
      sizeAttenuation: true,
    });
    const points = new Points(geometry, material);
    const group = new Group();
    group.add(points);
    scene.add(group);
    return { group, parallax: layer.parallax, spread: layer.spread };
  });

  /* a faint gold/teal nebula haze, sparse, far layer */
  const nebulaGeom = new BufferGeometry();
  const nebulaCount = 24;
  const nebulaPos = new Float32Array(nebulaCount * 3);
  for (let i = 0; i < nebulaCount; i++) {
    nebulaPos[i * 3] = (Math.random() - 0.5) * 100;
    nebulaPos[i * 3 + 1] = (Math.random() - 0.5) * 80;
    nebulaPos[i * 3 + 2] = -80 - Math.random() * 40;
  }
  nebulaGeom.setAttribute('position', new BufferAttribute(nebulaPos, 3));
  const nebulaMaterial = new PointsMaterial({
    map: dotTexture,
    size: 20,
    color: 0xc9a84c,
    transparent: true,
    opacity: 0.035,
    depthWrite: false,
    blending: AdditiveBlending,
    sizeAttenuation: true,
  });
  const nebula = new Points(nebulaGeom, nebulaMaterial);
  const nebulaGroup = new Group();
  nebulaGroup.add(nebula);
  scene.add(nebulaGroup);
  starGroups.push({ group: nebulaGroup, parallax: 0.3, spread: 80 });

  /* Wraps a position into [-spread/2, spread/2) — used for both the
     scroll parallax and the idle drift below so neither can ever carry a
     layer out past its own field and out of the camera frustum. */
  function wrap(value, spread) {
    const half = spread / 2;
    return (((value + half) % spread) + spread) % spread - half;
  }

  const clock = new Clock();
  let raf = null;

  function frame() {
    raf = requestAnimationFrame(frame);

    /* Canvas is fixed to the viewport (so it can host a real 3D scene
       behind scrolling content), so it must never paint outside the
       sliver of the hero section still on screen — a fixed,
       positive-z-index element otherwise wins over static-flow content
       below it regardless of DOM order. `scroll-padding-top` (set on
       <html> so the sticky nav doesn't cover a jumped-to heading) means
       the hero can rest with, say, ~90px still showing above Products —
       so this can't be a simple show/hide, it clips to exactly that
       remaining sliver every frame. */
    const heroRect = heroSection.getBoundingClientRect();
    if (heroRect.bottom <= 0 || heroRect.top >= window.innerHeight) {
      canvas.style.visibility = 'hidden';
      return;
    }
    canvas.style.visibility = 'visible';
    const visibleBottom = Math.max(0, Math.min(heroRect.bottom, window.innerHeight));
    canvas.style.clipPath = 'inset(0 0 ' + (window.innerHeight - visibleBottom).toFixed(0) + 'px 0)';

    const t = clock.getElapsedTime();
    const scrollY = window.scrollY;
    const heroH = heroSection.offsetHeight;
    const progress = Math.min(1, Math.max(0, scrollY / (heroH * 0.33)));

    /* subtle push into the scene as the hero begins to scroll away */
    camera.position.z = BASE_CAM_Z - progress * 0.8;

    /* layered depth parallax — near layers move noticeably more per pixel
       scrolled than far ones, so the sense of depth reads clearly while
       scrolling, PLUS a slow continuous idle drift (also stronger for
       near layers) so the field still feels alive when not scrolling at
       all. Both are wrapped (modulo) into each layer's own spread rather
       than translated without bound — a plain unbounded offset (this is
       also what the old group.rotation.y = t * 0.006 amounted to, since
       each layer is a box of points sitting off to one side in Z, not a
       full shell around the camera) eventually carries the whole layer
       out of the frustum, which is why the stars used to "float off"
       given enough time. Wrapping loops each axis back in from the far
       edge instead — invisible here since every layer's spread is
       several times wider than what's actually in view at its depth. */
    starGroups.forEach(({ group, parallax, spread }) => {
      const scrollOffset = scrollY * 0.007 * parallax;
      const driftY = -t * 0.4 * parallax;
      const driftX = t * 0.12 * parallax;
      group.position.y = wrap(scrollOffset + driftY, spread);
      group.position.x = wrap(driftX, spread);
    });

    renderer.render(scene, camera);
  }
  frame();

  return function cleanup() {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
    scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    });
    dotTexture.dispose();
    starTexture.dispose();
    renderer.dispose();
  };
}
