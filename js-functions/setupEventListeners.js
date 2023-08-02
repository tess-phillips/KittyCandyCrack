// setUpEventListeners.js
import { handleMouseDownOrTouchStart } from "./handleMouseDownOrTouchStart.js";
import { handleKittyRelease } from "./handleKittyRelease.js";
import { kitty1, kitty2 } from "../js-globalData/gameObjects.js"
import { checkForCollisions } from "./checkForCollisions.js";

function setupEventListeners() {

  
  kitty1.addEventListener("mousedown", handleMouseDownOrTouchStart);
  kitty2.addEventListener("mousedown", handleMouseDownOrTouchStart);
  kitty1.addEventListener("touchstart", handleMouseDownOrTouchStart);
  kitty2.addEventListener("touchstart", handleMouseDownOrTouchStart);

  // Prevent default behavior on touch events to avoid potential conflicts
  document.body.addEventListener("touchstart", (event) => {
    if (event.target === kitty1 || event.target === kitty2) {
      event.preventDefault();
    }
  });
  
  document.addEventListener("touchend", handleKittyRelease);
  document.addEventListener("mouseup", handleKittyRelease);  


  // const collisionResult = isCollision(ball, crack);
  // console.log('Collision Result:', collisionResult);


  
  // Start the continuous update loop for collision detection
  requestAnimationFrame(checkForCollisions);
}
  
export { setupEventListeners };  