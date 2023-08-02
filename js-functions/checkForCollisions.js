import { isCollision } from "./isCollision.js";

function checkForCollisions() {
    if (isCollision()) {
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

export { checkForCollisions }