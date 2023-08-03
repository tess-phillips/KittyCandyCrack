import { animateBallDrop } from "../animateBallDRop.js";
import { isMostlyOverlapping } from "./isMostlyOverlapping.js";
import { isTouching } from "./isTouching.js";
import { ball, crack } from "../../js-globalData/gameObjects.js";
import { gameState } from "../../js-globalData/gameState.js";


function checkForCollisions() {
  if (isMostlyOverlapping(ball, crack)) {
    console.log("Complete overlap detected!", ball);
    ball.style.display = "none";
     // Change here if you'd like it to go to the kitty on the right

    // Check if collision is not already detected before proceeding
    if (!gameState.collisionDetected) {
      gameState.collisionDetected = true; // Set the flag to true to indicate collision is detected
      setTimeout(() => {
        ball.style.left = "9px";
        gameState.ballPositionX = kitty1.offsetLeft + kitty1.offsetWidth / 2 - ball.offsetWidth / 2
        ball.style.display = "block";
        animateBallDrop();
      }, 1500);
    }
  } else if (isTouching(ball, crack)) {
    console.log("Collision detected!");
    cancelAnimationFrame(gameState.animationFrame); // Stop the animation loop
  }
}

export { checkForCollisions }