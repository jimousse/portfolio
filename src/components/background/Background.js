import React from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { particlesGeometry } from './particles/geometry';
import { particlesMaterial } from './particles/material';
import gsap from 'gsap';

const BACKGROUND_COLOR = '#0B0C3D';

const do3dStuff = (canvas) => {
  const scene = new THREE.Scene();

  const particules = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particules);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 3;
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(new THREE.Color(BACKGROUND_COLOR));

  const clock = new THREE.Clock();
  const tick = () => {
    const currentTime = clock.getElapsedTime();

    particules.rotation.y = currentTime / 100;

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
  };

  tick();
};

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    do3dStuff(canvasRef.current);
  }, []);

  return <canvas ref={canvasRef} className="background" />;
};

export default Background;
