import React from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

function render3DText(canvas) {
  const textureLoader = new THREE.TextureLoader();
  const fontLoader = new FontLoader();
  let text;
  fontLoader.load('/3d/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new TextGeometry('J.C.', {
      font: font,
      size: 0.6,
      height: 0.05,
      curveSegments: 20,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 10,
    });
    textGeometry.computeBoundingBox();
    textGeometry.center();
    const textMaterial = new THREE.MeshMatcapMaterial({
      matcap: textureLoader.load('/3d/textures/matcaps/8.png'),
    });
    text = new THREE.Mesh(textGeometry, textMaterial);
    scene.add(text);
  });

  const scene = new THREE.Scene();

  const sizes = {
    width: canvas.width,
    height: canvas.height,
  };

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.x = 0;
  camera.position.y = -0.1;
  camera.position.z = 1;
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
  });

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /**
   * Animate
   */
  const clock = new THREE.Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    if (text) {
      text.rotation.y = elapsedTime;
    }

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
}

const Text3d = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    render3DText(canvasRef.current);
  }, []);

  return <canvas ref={canvasRef} className="text-3d" />;
};

export default Text3d;
