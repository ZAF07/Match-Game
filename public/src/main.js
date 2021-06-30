import './resources/style.css';
import * as three from './three/three.js'
// Setting up the mouse ray
const pickPosition = {x: 0, y: 0};
clearPickPosition();
 

 
function getCanvasRelativePosition(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * canvas.width  / rect.width,
    y: (event.clientY - rect.top ) * canvas.height / rect.height,
  };
}
 
function setPickPosition(event) {
  const pos = getCanvasRelativePosition(event);
  pickPosition.x = (pos.x / canvas.width ) *  2 - 1;
  pickPosition.y = (pos.y / canvas.height) * -2 + 1;  // note we flip Y
}
 
function clearPickPosition() {
  // unlike the mouse which always has a position
  // if the user stops touching the screen we want
  // to stop picking. For now we just pick a value
  // unlikely to pick something
  pickPosition.x = -100000;
  pickPosition.y = -100000;
}
 
window.addEventListener('mousemove', setPickPosition);
window.addEventListener('mouseout', clearPickPosition);
window.addEventListener('mouseleave', clearPickPosition);


const pickHelper = new three.PickHelper();
const start = () => {


  pickHelper.pick(pickPosition, three.scene, three.camera, three.time)

  three.renderer.render(three.scene, three.camera)
  three.controls.update()

  requestAnimationFrame(start);
}

start();