import * as THREE from "three";

const COUNT = 2000;

const positions = new Float32Array(COUNT * 3);
for (let i = 0; i < COUNT * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}

const colors = new Float32Array(COUNT * 3);
for (let i = 0; i < COUNT; i++) {
  colors[i] = 187 / 255;
  colors[i + 1] = 248 / 255;
  colors[i + 2] = 253 / 255;
}

const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);

particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

export { particlesGeometry };
