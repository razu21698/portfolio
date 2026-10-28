'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function HeroBackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // WebGL Renderer with performance optimizations
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(container.clientWidth, container.clientHeight);

    const scene = new THREE.Scene();
    // Atmospheric fog for deep depth falloff
    scene.fog = new THREE.FogExp2(0x09090c, 0.075);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3.2, 7.5);
    camera.lookAt(0, 0, 0);

    // 1. Interactive Wave Terrain Mesh (Lando Norris high-speed cyber track feel)
    const gridWidth = 44;
    const gridDepth = 28;
    const segX = 70;
    const segY = 48;
    const planeGeo = new THREE.PlaneGeometry(gridWidth, gridDepth, segX, segY);
    planeGeo.rotateX(-Math.PI / 2.15);

    // Store original vertex coordinates
    const posAttr = planeGeo.attributes.position;
    const origPositions = new Float32Array(posAttr.array.length);
    origPositions.set(posAttr.array);

    const planeMat = new THREE.MeshBasicMaterial({
      color: 0x315cff,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const waveMesh = new THREE.Mesh(planeGeo, planeMat);
    waveMesh.position.y = -1.2;
    scene.add(waveMesh);

    // Secondary overlapping glowing accent line grid
    const secondaryMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const secondaryWave = new THREE.Mesh(planeGeo.clone(), secondaryMat);
    secondaryWave.position.y = -1.22;
    secondaryWave.position.z = -0.1;
    scene.add(secondaryWave);

    // 2. High-speed Luminous Particle Constellation
    const particleCount = 260;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 36;
      particlePositions[i + 1] = Math.random() * 8 - 1;
      particlePositions[i + 2] = (Math.random() - 0.5) * 22;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x82a0ff,
      size: 0.05,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Tracking state
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 3.2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = normX;
      mouseY = normY;

      targetCameraX = normX * 1.8;
      targetCameraY = 3.2 + normY * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const now = time || performance.now();
      const elapsed = (now - startTime) * 0.001;

      // Smooth camera tilt & drift with lerp damping
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // Procedural Liquid Wave Displacements across the 3D Plane
      const positions = posAttr.array as Float32Array;
      const count = posAttr.count;

      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        const x = origPositions[idx];
        const y = origPositions[idx + 1];

        // Dual sine harmonic wave calculation
        const wave1 = Math.sin(x * 0.35 + elapsed * 1.8) * Math.cos(y * 0.28 + elapsed * 1.4) * 0.65;
        const wave2 = Math.sin((x + y) * 0.2 + elapsed * 1.1) * 0.35;

        // Interactive mouse swell ripple
        const dx = x - mouseX * 8;
        const dy = y - mouseY * 6;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ripple = Math.exp(-dist * 0.35) * Math.cos(dist * 1.5 - elapsed * 4) * 0.85;

        positions[idx + 2] = origPositions[idx + 2] + wave1 + wave2 + ripple;
      }
      posAttr.needsUpdate = true;

      // Subtle particle drift
      particles.rotation.y = elapsed * 0.03;
      const partPos = particleGeo.attributes.position.array as Float32Array;
      for (let p = 1; p < particleCount * 3; p += 3) {
        partPos[p] += Math.sin(elapsed + p) * 0.002;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate(performance.now());

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);

      planeGeo.dispose();
      planeMat.dispose();
      secondaryMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* 3D WebGL Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Atmospheric Vignette Gradients for Text Contrast & High-Octane Aesthetics */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090c]/90 via-[#09090c]/40 to-[#09090c] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_20%,#09090c_85%)] pointer-events-none" />
    </div>
  );
}

