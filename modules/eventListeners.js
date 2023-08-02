// eventListeners.js
import { handleMouseDownOrTouchStart } from "./handleMouseDownOrTouchStart.js";
import { handleKittyRelease } from "./handleKittyRelease.js";

function isCollision(ball, crack) {
  const ballRect = ball.getBoundingClientRect();
  const crackRect = crack.getBoundingClientRect();

  // Check for collision
  const collision =
    ballRect.left < crackRect.right &&
    ballRect.right > crackRect.left &&
    ballRect.top < crackRect.bottom &&
    ballRect.bottom > crackRect.top;

  // Output the bounding rectangles and collision result to the console
  // console.log('Ball Rect:', ballRect);
  // console.log('Crack Rect:', crackRect);
  // console.log('Collision:', collision);

  return collision;
}


function setupEventListeners(kitty1, kitty2, ball, crack) {

  
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

  function checkForCollisions() {
    if (isCollision(ball, crack)) {
      // Handle collision here
      console.log("Collision detected!");
      // You can take appropriate actions when a collision is detected
      // For example, stopping the game or updating the score.
    } else {
      // No collision
      // console.log("No collision.");
    }
  
    // Continue the loop for continuous collision detection
    requestAnimationFrame(checkForCollisions);
  }
  
  // Start the continuous update loop for collision detection
  requestAnimationFrame(checkForCollisions);
}
  
export { setupEventListeners };  