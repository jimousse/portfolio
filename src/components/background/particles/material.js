import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();
const particleTexture = textureLoader.load(
  'https://raw.githubusercontent.com/jimousse/portfolio/main/img/particule-texture-2.png'
);

export const particlesMaterial = new THREE.PointsMaterial({
  size: 0.06,
  sizeAttenuation: true,
  alphaMap: particleTexture,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  vertexColors: true,
  opacity: 1,
});
