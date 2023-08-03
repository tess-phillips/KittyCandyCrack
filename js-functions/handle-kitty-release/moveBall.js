// moveBall.js
import { gameState } from "../../js-globalData/gameState.js";
import { ball } from "../../js-globalData/gameObjects.js";
import { isMostlyOverlapping } from "../check-for-collisions/isMostlyOverlapping.js";
import { isTouching } from "../check-for-collisions/isTouching.js";
import { animateBallDrop } from "../animateBallDRop.js";

function moveBall(releasedKitty, path) {
  // This function moves the ball incrementally
  const kitty_released = releasedKitty.id
  const targetKitty = kitty_released === "kitty1" ? kitty2 : kitty1;
  const direction = kitty_released === "kitty1" ? 1 : -1;

  const speed = 5; // Number of pixels the ball moves on each update

  const endX = targetKitty.offsetLeft + targetKitty.offsetWidth / 2 - ball.offsetWidth / 2;
  const endY = targetKitty.offsetTop + targetKitty.offsetHeight / 2 - ball.offsetHeight / 2;

  let collisionDetected = false

  // Function to check for collisions
  function checkForCollisions() {
    if (isMostlyOverlapping(ball, crack)) {
      console.log("Complete overlap detected!", ball);
      ball.style.display = "none";
       // Change here if you'd like it to go to the kitty on the right

      // Check if collision is not already detected before proceeding
      if (!collisionDetected) {
        collisionDetected = true; // Set the flag to true to indicate collision is detected
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

  function animationLoop() {
    checkForCollisions(); // Check for collisions before moving the ball

    if (path === "line") {
      gameState.ballPositionX += direction * speed;
      ball.style.left = gameState.ballPositionX + "px";
    } else if (path.includes("sine")) {
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
        else if (path== "sineCrack"){
        const amplitude = 60; // The distance the ball moves up and down
        const frequency = 0.07; // Adjust this value to control the frequency of the sine movement

        gameState.ballPositionX += gameState.ballPositionX < endX ? speed : -speed;
        ball.style.left = gameState.ballPositionX + "px";
  
        // Additional code for moving the ball up and down in a repeating pattern
  
        const offsetY = amplitude * Math.sin(frequency * gameState.ballPositionX);
  
        // The ball's new vertical position is calculated by adding the sine movement to the endY
        const newY = endY + offsetY;
        ball.style.top = newY + "px";  
        }
      }

      if (isMostlyOverlapping(ball, targetKitty) || isTouching(ball, targetKitty)) {
        clearInterval(gameState.interval);
        gameState.interval = null;
        gameState.passCounter++;
        ball.style.left = endX + "px";
        ball.style.top = endY + "px";
      } 
      else {
        if (!collisionDetected) {
          // Continue the animation loop only if no collision is detected
          gameState.animationFrame = requestAnimationFrame(animationLoop);
        }
      }
    }
  
    gameState.animationFrame = requestAnimationFrame(animationLoop); // Store the animation frame ID in gameState
  }
  
  export { moveBall };
