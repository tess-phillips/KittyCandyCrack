// moveBall.js
import { gameState } from "../../js-globalData/gameState.js";
import { ball } from "../../js-globalData/gameObjects.js";
import { isMostlyOverlapping } from "../check-for-collisions/isMostlyOverlapping.js";
import { isTouching } from "../check-for-collisions/isTouching.js";

function moveBall(releasedKitty, path) {
  // This function moves the ball incrementally
  const kitty_released = releasedKitty.id
  const targetKitty = kitty_released === "kitty1" ? kitty2 : kitty1;

  const speed = 5; // Number of pixels the ball moves on each update

  const startX = gameState.ballPositionX;
  const startY = ball.offsetTop;

  const endX = targetKitty.offsetLeft + targetKitty.offsetWidth / 2 - ball.offsetWidth / 2;
  const endY = targetKitty.offsetTop + targetKitty.offsetHeight / 2 - ball.offsetHeight / 2;

  // if (gameState.ballPositionX == endX) {
  if (isMostlyOverlapping(ball, targetKitty)){
    clearInterval(gameState.interval);
    gameState.interval = null;
    gameState.passCounter++;
    ball.style.left = endX + "px"
    ball.style.top = endY + "px"
    gameState.ballPositionX == endX
  } else if (isTouching(ball, targetKitty)){
    clearInterval(gameState.interval);
    gameState.interval = null;
    gameState.passCounter++;
    ball.style.left = endX + "px"
    ball.style.top = endY + "px"
    gameState.ballPositionX == endX
  } else {
    if (path == "line"){
      gameState.ballPositionX += gameState.ballPositionX < endX ? speed : -speed;
      ball.style.left = gameState.ballPositionX + "px";
      console.log("done/")
    } else if (path.includes("sine")){
      if (path == "sine1"){
        const amplitude = 50; // The distance the ball moves up and down
        const frequency = 0.01; // Adjust this value to control the frequency of the sine movement

        gameState.ballPositionX += gameState.ballPositionX < endX ? speed : -speed;
        ball.style.left = gameState.ballPositionX + "px";
  
        // Additional code for moving the ball up and down in a repeating pattern
  
        const offsetY = amplitude * Math.sin(frequency * gameState.ballPositionX);
  
        // The ball's new vertical position is calculated by adding the sine movement to the endY
        const newY = endY + offsetY;
        ball.style.top = newY + "px";  
      }
      else if (path== "sine2"){
        const amplitude = 10; // The distance the ball moves up and down
        const frequency = 0.01; // Adjust this value to control the frequency of the sine movement

        gameState.ballPositionX += gameState.ballPositionX < endX ? speed : -speed;
        ball.style.left = gameState.ballPositionX + "px";
  
        // Additional code for moving the ball up and down in a repeating pattern
  
        const offsetY = amplitude * Math.sin(frequency * gameState.ballPositionX);
  
        // The ball's new vertical position is calculated by adding the sine movement to the endY
        const newY = endY + offsetY;
        ball.style.top = newY + "px";  
      }
  
    } else if (path == "goToCrack"){
      gameState.ballPositionX += gameState.ballPositionX < endX ? speed : -speed;
      ball.style.left = gameState.ballPositionX + "px";
      gameState.ballPositionY += 1
      ball.style.top = gameState.ballPositionY + "px";
    }
  }
}

export { moveBall };
