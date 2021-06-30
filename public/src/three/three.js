import moon from '../img/moon.png';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { InteractionManager } from "three.interactive";




// Accessing the DOM canvas
const canvas = document.getElementById('canvas');

// Setting up standard scene, camera, and light

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true
})

// Scene
const scene = new THREE.Scene();
// Set size to render app (use width and height of browser)
renderer.setSize(window.innerWidth, window.innerHeight)
// Camera
const camera = new THREE.PerspectiveCamera(60, 2, 0.1, 200);
camera.position.z = 30;

class PickHelper {
  constructor() {
    this.raycaster = new THREE.Raycaster();
    this.pickedObject = null;
    this.pickedObjectSavedColor = 0;
  }
  pick(normalizedPosition, scene, camera, time) {
    // restore the color if there is a picked object
    if (this.pickedObject) {
      this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);
      this.pickedObject = undefined;
    }
 
    // cast a ray through the frustum
    this.raycaster.setFromCamera(normalizedPosition, camera);
    // get the list of objects the ray intersected
    const intersectedObjects = this.raycaster.intersectObjects(scene.children);
    if (intersectedObjects.length) {
      // pick the first object. It's the closest one
      this.pickedObject = intersectedObjects[0].object;
      // save its color
      this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex();
      // set its emissive color to flashing red/yellow
      this.pickedObject.material.emissive.setHex((time * 8) % 2 > 1 ? 0xFFFF00 : 0xFF0000);
      // this.pickedObject.position.y = -10000
      scene.remove(this.pickedObject)
    }
  }
}

const light = new THREE.DirectionalLight(0xFFF);
light.position.set(-1,2,4);


// Ambient light 
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);


// Controls 
const controls = new OrbitControls(camera, renderer.domElement)

// Interaction manager
const interactionManager = new InteractionManager(
  renderer,
  camera,
  renderer.domElement
)


// Generating the shapes
const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
 
function rand(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + (max - min) * Math.random();
}
 
function randomColor() {
  return `hsl(${rand(360) | 0}, ${rand(50, 100) | 0}%, 50%)`;
}
 
const numObjects = 100;
for (let i = 0; i < numObjects; ++i) {
  const material = new THREE.MeshPhongMaterial({
    color: randomColor(),
    
  });
 
  const cube = new THREE.Mesh(geometry, material);

  cube.addEventListener('mousedown', (e) => {
    console.log('clicked');
    e.target.position.y = -10000
  });
  interactionManager.add(cube)


  scene.add(cube);
 
  cube.position.set(rand(-20, 20), rand(-20, 20), rand(-20, 20));
  cube.rotation.set(rand(Math.PI), rand(Math.PI), 0);
  cube.scale.set(rand(3, 6), rand(3, 6), rand(3, 6));
};





// SCENE
scene.add(camera);
scene.add(light);
scene.background = new THREE.Color(0xFFFFFF);
scene.add(ambientLight)

const time = new THREE.Clock();
export {renderer, scene, camera, controls, PickHelper, time}