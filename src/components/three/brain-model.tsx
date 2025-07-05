'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BrainModel = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Brain/Abstract object
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0x9400D3, // Primary color from theme
        wireframe: true,
    });
    const brain = new THREE.Mesh(geometry, material);
    scene.add(brain);

    // Animate
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      brain.rotation.y = elapsedTime * 0.2;
      brain.rotation.x = elapsedTime * 0.1;
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full" />;
};

export default BrainModel;
