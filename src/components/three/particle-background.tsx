'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const particleCount = 5000;
    const particles = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      particles[i] = (Math.random() - 0.5) * 10;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x3B82F6,
      size: 0.015,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    
    const mouse = new THREE.Vector2();
    
    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      particleSystem.rotation.y = elapsedTime * 0.05 + mouse.x * 0.2;
      particleSystem.rotation.x = elapsedTime * 0.05 + mouse.y * 0.2;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default ParticleBackground;
