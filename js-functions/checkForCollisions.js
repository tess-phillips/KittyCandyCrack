import { animateBallDrop } from "./animateBallDRop.js";
import { isTouching, isMostlyOverlapping } from "./isCollision.js";
import { ball } from "../js-globalData/gameObjects.js";
import { gameState } from "../js-globalData/gameState.js";


function checkForCollisions() {
  if (isMostlyOverlapping()){
    console.log("Complete overlap detected!")
    clearInterval(gameState.interval);
    gameState.interval = null;
    ball.style.display = "none"
    ball.style.left = "9px"
    // ball.remove()
    // ball = document.createElement("div");
    // ball.id = "ball";
    // ball.className = "ball";
    setTimeout(() => {
      ball.style.display = "block";
      animateBallDrop(); // Call animateBallDrop to make the ball drop again
      console.log("ball dropped - kittyCanRelease not releasing?")
    }, 1000);
  } 
  else if (isTouching()) {
    console.log("Collision detected!")
  } 
  else {
    // No collision
    // console.log("No collision.");
  }


  // Continue the loop for continuous collision detection
  requestAnimationFrame(checkForCollisions);
}

export { checkForCollisions }