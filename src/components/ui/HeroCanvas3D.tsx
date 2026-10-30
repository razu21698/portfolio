'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, RotateCcw, Eye, Sparkles } from 'lucide-react';

interface HeroCanvas3DProps {
  className?: string;
}

export function HeroCanvas3D({ className = '' }: HeroCanvas3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fps, setFps] = useState<number>(60);
  const [viewMode, setViewMode] = useState<'architecture' | 'orbital' | 'nodes'>('architecture');
  const [wireframeOnly, setWireframeOnly] = useState<boolean>(false);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check WebGL availability
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

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Root Group for Mouse Rotation
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central Core Group (Inner + Outer)
    const coreGroup = new THREE.Group();
    rootGroup.add(coreGroup);

    // Outer Geometric Icosahedron (Electric Blue Wireframe)
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x315cff,
      wireframe: true,
      emissive: 0x1d3eb8,
      emissiveIntensity: 0.25,
      roughness: 0.2,
      metalness: 0.8,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Outer Wireframe Glow Points (Vertices)
    const pointGeo = new THREE.BufferGeometry();
    const posAttr = outerGeo.getAttribute('position');
    pointGeo.setAttribute('position', posAttr);
    const pointMat = new THREE.PointsMaterial({
      color: 0x82a0ff,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
    });
    const pointsMesh = new THREE.Points(pointGeo, pointMat);
    coreGroup.add(pointsMesh);

    // Inner Solid Faceted Octahedron (Obsidian with subtle blue glow)
    const innerGeo = new THREE.OctahedronGeometry(0.9, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x141416,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x315cff,
      emissiveIntensity: 0.15,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 2. Orbital Rings (3 distinct axes for architectural depth)
    const ringGroup = new THREE.Group();
    rootGroup.add(ringGroup);

    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x315cff,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x5f5f58,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0x059669,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.015, 8, 64), ringMat1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.5, 0.015, 8, 64), ringMat2);
    ring2.rotation.x = Math.PI / 3;
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.015, 8, 64), ringMat3);
    ring3.rotation.y = Math.PI / 2.5;

    ringGroup.add(ring1);
    ringGroup.add(ring2);
    ringGroup.add(ring3);

    // 3. Floating Micro-Nodes (Simulating APIs, microservices, and databases)
    const nodesGroup = new THREE.Group();
    rootGroup.add(nodesGroup);

    const nodeCount = 8;
    const nodeSpheres: THREE.Mesh[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.4;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * (radius * 0.7);
      const z = (Math.sin(angle * 2) * 0.8);

      const nGeo = new THREE.SphereGeometry(0.09, 12, 12);
      const nMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x315cff : 0x059669,
        emissive: i % 2 === 0 ? 0x315cff : 0x059669,
        emissiveIntensity: 0.5,
      });
      const node = new THREE.Mesh(nGeo, nMat);
      node.position.set(x, y, z);
      nodesGroup.add(node);
      nodeSpheres.push(node);
    }

    // 4. Subtle Particle Background Constellation
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x888880,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x315cff, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x059669, 1.5);
    dirLight2.position.set(-5, -3, 2);
    scene.add(dirLight2);

    const mouseLight = new THREE.PointLight(0x315cff, 3, 10);
    scene.add(mouseLight);

    // Interaction & Animation Loop State
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let animationFrameId: number;

    // Mouse Tracking
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      setCoords({ x: Math.round(x * 100) / 100, y: Math.round(y * 100) / 100 });

      // Move point light
      mouseLight.position.set(x * 4, y * 4, 3);

      if (isDragging) {
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        previousMousePosition = { x: event.clientX, y: event.clientY };
      } else {
        targetRotationY = x * 0.6;
        targetRotationX = -y * 0.6;
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const handleMouseEnter = () => setIsInteracting(true);
    const handleMouseLeave = () => {
      setIsInteracting(false);
      isDragging = false;
      targetRotationX = 0;
      targetRotationY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Resize Handler
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

    // FPS & Timing
    const startTime = performance.now();
    let lastTime = performance.now();
    let frameCount = 0;

    // Animation Tick
    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const now = time || performance.now();
      const elapsedTime = (now - startTime) * 0.001;

      // FPS tracking every 500ms
      frameCount++;
      if (now - lastTime >= 500) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }

      // Smooth Rotation with Lerp Damping
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.06;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.06;

      // Base Automated Rotations
      const speedMultiplier = isInteracting ? 1.6 : 1.0;
      coreGroup.rotation.y += 0.008 * speedMultiplier;
      coreGroup.rotation.x += 0.004 * speedMultiplier;
      innerMesh.rotation.y -= 0.012 * speedMultiplier;
      innerMesh.rotation.z += 0.008 * speedMultiplier;

      // Orbital Rings Rotation
      ring1.rotation.z += 0.006 * speedMultiplier;
      ring2.rotation.x += 0.005 * speedMultiplier;
      ring3.rotation.y += 0.007 * speedMultiplier;

      // Pulse Orbiting Nodes
      nodeSpheres.forEach((node, i) => {
        const floatOffset = Math.sin(elapsedTime * 2 + i) * 0.08;
        node.position.y += floatOffset * 0.03;
      });

      // Background Particle Field Subtle Drift
      particleField.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate(performance.now());

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);

      // Clean disposal
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      ringMat3.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [isInteracting]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-2xl bg-[#0e0e11] border border-[#262626] overflow-hidden select-none group shadow-xl ${className}`}
    >
      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(49,92,255,0.12),transparent_70%)]" />

      {/* Top Floating HUD: Telemetry & Status Bar */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono font-medium pointer-events-none z-10">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#181818]/80 backdrop-blur-md border border-[#2e2e2e] text-[#D4D4D4]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="font-semibold text-white">ENGINEERING CORE</span>
          <span className="text-[#888880]">v3.2</span>
        </div>

        <div className="hidden sm:flex items-center gap-3 px-2.5 py-1 rounded-md bg-[#181818]/80 backdrop-blur-md border border-[#2e2e2e] text-[#A0A0A0]">
          <span>
            FPS: <strong className="text-white">{fps}</strong>
          </span>
          <span className="text-[#3A3A3A]">|</span>
          <span>
            X: <strong className="text-[#D4FF00]">{coords.x}</strong> Y: <strong className="text-[#D4FF00]">{coords.y}</strong>
          </span>
          <span className="text-[#3A3A3A]">|</span>
          <span className="text-[#10B981]">GPU 60Hz</span>
        </div>
      </div>

      {/* Bottom Floating Controls & Engineering Legend */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-medium z-10">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#181818]/90 backdrop-blur-md border border-[#2e2e2e] text-[#A0A0A0]">
          <Sparkles className="w-3.5 h-3.5 text-[#D4FF00]" />
          <span>Interactive 3D Matrix • Drag to Orbit</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 px-2 py-1 rounded-md bg-[#181818]/90 backdrop-blur-md border border-[#2e2e2e] text-[#888880]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D4FF00]" />
            <span>Architecture</span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#059669]" />
            <span>Rest APIs</span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#888880]" />
            <span>Telemetry</span>
          </div>
        </div>
      </div>

      {/* Corner Grid Crosshairs for Swiss Architectural feel */}
      <div className="absolute top-2 left-2 text-[#444444] font-mono text-xs pointer-events-none">+</div>
      <div className="absolute top-2 right-2 text-[#444444] font-mono text-xs pointer-events-none">+</div>
      <div className="absolute bottom-2 left-2 text-[#444444] font-mono text-xs pointer-events-none">+</div>
      <div className="absolute bottom-2 right-2 text-[#444444] font-mono text-xs pointer-events-none">+</div>
    </div>
  );
}
