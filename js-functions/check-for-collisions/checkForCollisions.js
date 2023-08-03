import { animateBallDrop } from "../animateBallDRop.js";
import { isMostlyOverlapping } from "./isMostlyOverlapping.js";
import { isTouching } from "./isTouching.js";
import { ball, crack } from "../../js-globalData/gameObjects.js";
import { gameState } from "../../js-globalData/gameState.js";


function checkForCollisions() {
  if (isMostlyOverlapping(ball,crack)){
    console.log("Complete overlap detected!")
    clearInterval(gameState.interval);
    gameState.interval = null;
    gameState.ballPositionX = kitty1.offsetLeft + kitty1.offsetWidth / 2 - ball.offsetWidth / 2,

    ball.style.display = "none"
    ball.style.left = "9px"  // Change here if you'd like it to go to kitty on right
    setTimeout(() => {
      ball.style.display = "block";
      animateBallDrop();
    }, 1500);
  } 
  else if (isTouching(ball,crack)) {
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