"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const W = mountRef.current.clientWidth;
    const H = mountRef.current.clientHeight;

    // ── Renderer ──────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // ── Scene / Camera ────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 1000);
    camera.position.z = 90;

    // ── Particles (white/gray tones) ──────────────────────────────────────
    const PARTICLE_COUNT = 80;
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const vel: { vx: number; vy: number; vz: number }[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 20 + Math.random() * 45;
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;

      // White / light gray color palette
      const brightness = 0.45 + Math.random() * 0.55;
      col[i * 3]     = brightness;
      col[i * 3 + 1] = brightness;
      col[i * 3 + 2] = brightness;

      vel.push({
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        vz: (Math.random() - 0.5) * 0.03,
      });
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));

    const pMat = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // ── Connection Lines ────────────────────────────────────────────────────
    const MAX_LINES = 100;
    const linePos = new Float32Array(MAX_LINES * 6);
    const lineColors = new Float32Array(MAX_LINES * 6);

    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
    lGeo.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lines = new THREE.LineSegments(lGeo, lMat);
    scene.add(lines);

    // ── Central Icosahedron — white wireframe ─────────────────────────────
    const icoGeo = new THREE.IcosahedronGeometry(18, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    // Inner icosahedron — gray wireframe
    const ico2Geo = new THREE.IcosahedronGeometry(10, 0);
    const ico2Mat = new THREE.MeshBasicMaterial({
      color: 0x888888,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const ico2 = new THREE.Mesh(ico2Geo, ico2Mat);
    scene.add(ico2);

    // ── Orbital Rings — white / gray ──────────────────────────────────────
    const makeRing = (radius: number, tube: number, color: number, opacity: number, rotX: number, rotY: number) => {
      const geo = new THREE.TorusGeometry(radius, tube, 6, 60);
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity, blending: THREE.AdditiveBlending });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = rotX;
      mesh.rotation.y = rotY;
      scene.add(mesh);
      return mesh;
    };

    const ring1 = makeRing(28, 0.2, 0xffffff, 0.07, Math.PI / 2.5, 0.3);
    const ring2 = makeRing(36, 0.15, 0x666666, 0.05, Math.PI / 4, 0.8);

    // ── Mouse Tracking ────────────────────────────────────────────────────
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.4;
      targetY = (e.clientY / window.innerHeight - 0.5) * 0.25;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Resize ────────────────────────────────────────────────────────────
    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ── Animation Loop ────────────────────────────────────────────────────
    let animId: number;
    const startTime = Date.now();
    const CONNECT_DIST = 25;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = (Date.now() - startTime) / 1000;

      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      const positionArray = pGeo.attributes.position.array as Float32Array;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        positionArray[i * 3]     += vel[i].vx;
        positionArray[i * 3 + 1] += vel[i].vy;
        positionArray[i * 3 + 2] += vel[i].vz;

        if (positionArray[i * 3] > 80) positionArray[i * 3] = -80;
        else if (positionArray[i * 3] < -80) positionArray[i * 3] = 80;

        if (positionArray[i * 3 + 1] > 60) positionArray[i * 3 + 1] = -60;
        else if (positionArray[i * 3 + 1] < -60) positionArray[i * 3 + 1] = 60;

        if (positionArray[i * 3 + 2] > 40) positionArray[i * 3 + 2] = -40;
        else if (positionArray[i * 3 + 2] < -40) positionArray[i * 3 + 2] = 40;
      }
      pGeo.attributes.position.needsUpdate = true;

      // Build connection lines
      let lineCount = 0;
      for (let i = 0; i < PARTICLE_COUNT && lineCount < MAX_LINES; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT && lineCount < MAX_LINES; j++) {
          const dx = positionArray[i*3]   - positionArray[j*3];
          const dy = positionArray[i*3+1] - positionArray[j*3+1];
          const dz = positionArray[i*3+2] - positionArray[j*3+2];
          const d  = Math.sqrt(dx*dx + dy*dy + dz*dz);

          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.3;

            linePos[lineCount*6]     = positionArray[i*3];
            linePos[lineCount*6+1]   = positionArray[i*3+1];
            linePos[lineCount*6+2]   = positionArray[i*3+2];
            linePos[lineCount*6+3]   = positionArray[j*3];
            linePos[lineCount*6+4]   = positionArray[j*3+1];
            linePos[lineCount*6+5]   = positionArray[j*3+2];

            lineColors[lineCount*6]     = col[i*3]   * alpha;
            lineColors[lineCount*6+1]   = col[i*3+1] * alpha;
            lineColors[lineCount*6+2]   = col[i*3+2] * alpha;
            lineColors[lineCount*6+3]   = col[j*3]   * alpha;
            lineColors[lineCount*6+4]   = col[j*3+1] * alpha;
            lineColors[lineCount*6+5]   = col[j*3+2] * alpha;

            lineCount++;
          }
        }
      }
      lGeo.setDrawRange(0, lineCount * 2);
      lGeo.attributes.position.needsUpdate = true;
      lGeo.attributes.color.needsUpdate = true;

      particles.rotation.y = t * 0.05 + currentX;
      particles.rotation.x = currentY * 0.5;

      ico.rotation.x = t * 0.08;
      ico.rotation.y = t * 0.12;

      ico2.rotation.x = -t * 0.12;
      ico2.rotation.z = t * 0.08;

      ring1.rotation.z = t * 0.05;
      ring2.rotation.z = -t * 0.03;

      camera.position.y = Math.sin(t * 0.25) * 1.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      pGeo.dispose(); pMat.dispose();
      lGeo.dispose(); lMat.dispose();
      icoGeo.dispose(); icoMat.dispose();
      ico2Geo.dispose(); ico2Mat.dispose();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: "absolute", inset: 0, zIndex: 0 }} />;
}
