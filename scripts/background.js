import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js'
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { AfterimagePass } from 'three/addons/postprocessing/AfterimagePass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import '../css/style.css';

//variables and constants
const rotationMultiplier = {value: 1};
var projectsLink = document.getElementById("projects-link");
var aboutLink = document.getElementById("about-link");

//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 100);
camera.position.setZ(30);
scene.add(camera);

//renderer
const canvas = document.querySelector("#bg");
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//geometry
const geometry = new THREE.IcosahedronGeometry(8, 0);
const material = new THREE.MeshStandardMaterial({color: 0xffffff, wireframe: false});
const icosahedron = new THREE.Mesh(geometry, material);
icosahedron.position.set(10,0,0);
scene.add(icosahedron);

//lighting
const point = new THREE.PointLight(0xffffff, 1000, 100);
const ambient = new THREE.AmbientLight(0x404040, 0.2);
point.position.set(25, 12, 15);
scene.add(point);
scene.add(ambient);

//effect
const effect = new AsciiEffect(renderer, ' ..:-+*=%@#', {invert: true, resolution: 0.20, alpha: true});
effect.setSize(window.innerWidth, window.innerHeight);
effect.domElement.style.color = 'white';
effect.domElement.style.backgroundColor = 'black';
effect.domElement.style.position = 'fixed';
effect.domElement.style.top='0';
effect.domElement.style.left='0';
effect.domElement.style.zIndex='-1';
document.body.appendChild(effect.domElement);
effect.render(scene, camera);
//composer


//animation loop
function animate() {
	requestAnimationFrame(animate);
	icosahedron.rotation.x+=0.002*rotationMultiplier.value;
	icosahedron.rotation.y+=0.002;
	icosahedron.rotation.z+=0.002*rotationMultiplier.value;
	TWEEN.update();
	effect.render(scene, camera);
}
animate();

//fun lil animations for hovering over shit
projectsLink.addEventListener("mouseover", () =>{
	transitionRotationSpeed(19);
});
projectsLink.addEventListener("mouseout", () =>{
	transitionRotationSpeed(1);
});
aboutLink.addEventListener("mouseover", () =>{
	transitionRotationSpeed(-19);
});
aboutLink.addEventListener("mouseout", () =>{
	transitionRotationSpeed(1);
});
//tweening function for smoother animation
function transitionRotationSpeed(target) {
	var test = 0;
	new TWEEN.Tween(rotationMultiplier)
		.to({value: target}, 575)
		.easing(TWEEN.Easing.Quadratic.Out)
		.start()
}
//resize listener
