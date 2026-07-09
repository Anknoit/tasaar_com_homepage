import * as THREE from 'three';

/* Every product slot gets identical material, light rig, scale and
   animation speed — centrality bias comes from grid position alone,
   never from giving the "important" slot special treatment. What varies
   is built to actually represent what the product does:

   - Navnet — a BMS that manages IoT devices for energy efficiency from a
     central controller. Modeled as a hub-and-spoke topology (star, not a
     mesh — a BMS manages devices, it doesn't peer them to each other),
     with small pulses continuously traveling out along each spoke: the
     energy/data flow being managed.

   - Platform3 — a self-healing RAN platform: six ML models across two
     layers watch every user's connection (every 500ms) and correct
     degradation before it's noticed. Modeled as a tapering node tower —
     a wide base ring (the many individual user connections being
     watched), narrowing through two smaller rings (the two ML layers),
     up to a single apex (the corrective action). A pulse continuously
     rises from base to apex: the monitor-and-heal loop running on
     repeat. The taper itself doubles as a RAN/cell-tower silhouette.

   - reserved / unnamed slot — a plain unfilled wireframe cube, signaling
     nothing has been assigned here yet. */

const FACE_COLOR = 0xb01030; /* --crimson */
const EDGE_COLOR = 0xc9a84c; /* --gold */
const KEY_COLOR = 0xe0c070;  /* --gold-lt */
const FILL_COLOR = 0x1e8a6e; /* --teal-lt */

function makeMaterial() {
  return new THREE.MeshStandardMaterial({
    color: FACE_COLOR,
    flatShading: true,
    metalness: 0.4,
    roughness: 0.4,
  });
}
function makeLineMaterial(opacity) {
  return new THREE.LineBasicMaterial({ color: EDGE_COLOR, transparent: true, opacity });
}
function makePulseMesh() {
  return new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), new THREE.MeshBasicMaterial({ color: EDGE_COLOR }));
}

/* Builders return { root, update? } — update(t) drives any per-frame
   animation beyond the shared idle rotation applied in createInstance. */

function buildNavnet() {
  const group = new THREE.Group();
  const material = makeMaterial();

  const hub = new THREE.Mesh(new THREE.IcosahedronGeometry(0.22, 0), material);
  group.add(hub);

  const deviceGeometry = new THREE.IcosahedronGeometry(0.09, 0);
  const deviceCount = 7;
  const devices = Array.from({ length: deviceCount }, (_, i) => {
    const angle = (i / deviceCount) * Math.PI * 2;
    const y = ((i % 3) - 1) * 0.32;
    return new THREE.Vector3(Math.cos(angle) * 1.0, y, Math.sin(angle) * 1.0);
  });
  devices.forEach((pos) => {
    const device = new THREE.Mesh(deviceGeometry, material);
    device.position.copy(pos);
    group.add(device);
  });

  const linePositions = [];
  devices.forEach((pos) => linePositions.push(0, 0, 0, pos.x, pos.y, pos.z));
  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  group.add(new THREE.LineSegments(lineGeometry, makeLineMaterial(0.55)));

  const pulses = devices.map((target, i) => {
    const mesh = makePulseMesh();
    group.add(mesh);
    return { mesh, target, phase: i / devices.length };
  });

  function update(t) {
    pulses.forEach(({ mesh, target, phase }) => {
      const progress = (t * 0.35 + phase) % 1;
      mesh.position.set(target.x * progress, target.y * progress, target.z * progress);
    });
  }

  return { root: group, update };
}

function buildPlatform() {
  const group = new THREE.Group();
  const material = makeMaterial();
  const nodeGeometry = new THREE.IcosahedronGeometry(0.1, 0);
  const apexGeometry = new THREE.IcosahedronGeometry(0.14, 0);

  const ringSpecs = [
    { y: -0.65, radius: 0.95, count: 8 }, // per-user connections, watched every 500ms
    { y: -0.2, radius: 0.55, count: 3 },  // ML layer 1
    { y: 0.28, radius: 0.32, count: 3 },  // ML layer 2
  ];
  const rings = ringSpecs.map(({ y, radius, count }) =>
    Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const pos = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      const node = new THREE.Mesh(nodeGeometry, material);
      node.position.copy(pos);
      group.add(node);
      return pos;
    })
  );

  const apexPos = new THREE.Vector3(0, 0.7, 0);
  const apex = new THREE.Mesh(apexGeometry, material);
  apex.position.copy(apexPos);
  group.add(apex);

  const linePositions = [];
  function connectNearest(fromNodes, toNodes) {
    fromNodes.forEach((from) => {
      let nearest = toNodes[0];
      let best = Infinity;
      toNodes.forEach((to) => {
        const d = from.distanceTo(to);
        if (d < best) { best = d; nearest = to; }
      });
      linePositions.push(from.x, from.y, from.z, nearest.x, nearest.y, nearest.z);
    });
  }
  connectNearest(rings[0], rings[1]);
  connectNearest(rings[1], rings[2]);
  connectNearest(rings[2], [apexPos]);

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  group.add(new THREE.LineSegments(lineGeometry, makeLineMaterial(0.75)));

  const pulse = makePulseMesh();
  group.add(pulse);
  const baseY = ringSpecs[0].y;
  const topY = apexPos.y;

  function update(t) {
    const progress = (t * 0.25) % 1;
    pulse.position.set(0, baseY + (topY - baseY) * progress, 0);
  }

  /* A tower has an obvious "up" — unlike the graph/cube, tumbling it on
     X eventually flips it completely upside down. keepUpright restricts
     its idle animation to a Y-axis spin only (a turntable), never X. */
  return { root: group, update, keepUpright: true };
}

function buildReserved() {
  const geometry = new THREE.BoxGeometry(1.4, 1.4, 1.4);
  const root = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), makeLineMaterial(0.6));
  return { root };
}

function buildObject(shape) {
  switch (shape) {
    case 'network': return buildNavnet();
    case 'platform': return buildPlatform();
    case 'reserved':
    default: return buildReserved();
  }
}

function createInstance(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 10);
  camera.position.set(0, 0, 4.4);

  const { root, update, keepUpright } = buildObject(canvas.dataset.shape);
  root.rotation.set(0.4, 0.6, 0);
  scene.add(root);

  scene.add(new THREE.AmbientLight(0x101420, 0.9));
  const key = new THREE.DirectionalLight(KEY_COLOR, 1.15);
  key.position.set(2.2, 3, 2.5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(FILL_COLOR, 0.3);
  fill.position.set(-3, -1.5, 1.5);
  scene.add(fill);

  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }

  return { renderer, scene, camera, mesh: root, update, keepUpright, resize };
}

/* Initializes every .product-canvas on the page; returns a cleanup
   function. Rendering only runs while the products section is on
   screen (IntersectionObserver-gated shared ticker). */
export function initProductScenes() {
  const canvases = Array.from(document.querySelectorAll('.product-canvas'));
  if (!canvases.length || !('WebGLRenderingContext' in window)) return () => {};

  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const instances = canvases.map(createInstance);

  const ro = new ResizeObserver(() => instances.forEach((i) => i.resize()));
  instances.forEach((i) => ro.observe(i.renderer.domElement));
  instances.forEach((i) => i.resize());
  instances.forEach((i) => i.renderer.render(i.scene, i.camera));

  let raf = null;
  let io = null;

  if (!REDUCED_MOTION) {
    const clock = new THREE.Clock();
    let running = false;

    const tick = () => {
      const t = clock.getElapsedTime();
      instances.forEach((i) => {
        i.mesh.rotation.y += 0.0045;
        if (!i.keepUpright) i.mesh.rotation.x += 0.0032;
        if (i.update) i.update(t);
        i.renderer.render(i.scene, i.camera);
      });
      raf = requestAnimationFrame(tick);
    };

    const section = document.getElementById('products');
    if (section && 'IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !running) {
            running = true;
            instances.forEach((i) => i.resize());
            tick();
          } else if (!entry.isIntersecting && running) {
            running = false;
            cancelAnimationFrame(raf);
          }
        });
      }, { threshold: 0.1 });
      io.observe(section);
    } else {
      tick();
    }
  }

  return function cleanup() {
    cancelAnimationFrame(raf);
    if (io) io.disconnect();
    ro.disconnect();
    instances.forEach((i) => {
      i.scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
      });
      i.renderer.dispose();
    });
  };
}
