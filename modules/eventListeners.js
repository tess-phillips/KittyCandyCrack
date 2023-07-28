// eventListeners.js
import { kittyCanRelease } from "./kittyCanRelease.js"
import { moveBall } from "./moveBall.js";
import { ballSpeed } from "./ballSpeed.js";

// function isCollision(ball, crack) {
//   const ballRect = ball.getBoundingClientRect();
//   const crackRect = crack.getBoundingClientRect();

//   // Check for collision
//   return (
//     ballRect.left < crackRect.right &&
//     ballRect.right > crackRect.left &&
//     ballRect.top < crackRect.bottom &&
//     ballRect.bottom > crackRect.top
//   );
// }

function setupEventListeners(gameState, kitty1, kitty2, ball) {
  // For mouse events
  kitty1.addEventListener("mousedown", () => {
    console.log("Mouse down");
    gameState.eventStart = Date.now(); // Record the event start time
  });

  kitty2.addEventListener("mousedown", () => {
    console.log("Mouse down");
    gameState.eventStart = Date.now(); // Record the event start time
  });

  // For touch events
  kitty1.addEventListener("touchstart", () => {
    console.log("Touch start");
    gameState.eventStart = Date.now(); // Record the event start time
  });

  kitty2.addEventListener("touchstart", () => {
    console.log("Touch start");
    gameState.eventStart = Date.now(); // Record the event start time
  });

  // Prevent default behavior on touch events to avoid potential conflicts
  document.body.addEventListener("touchstart", (event) => {
    if (event.target === kitty1 || event.target === kitty2) {
      event.preventDefault();
    }
  });


  //relevant listeners to kittyCanRelease
  document.addEventListener("touchend", (event) => {
    console.log("Touch end");
    event.stopPropagation();
    if (kittyCanRelease(gameState, ball, event.target)){ 
      gameState.speed_ = ballSpeed(gameState)
      // Move the ball towards the other kitty
      gameState.interval = setInterval(() => moveBall(gameState, ball, event.target), gameState.speed_ ); 
    }
  });

  document.addEventListener("mouseup", (event) => {
    console.log("Mouse up");
    event.stopPropagation();
    if (kittyCanRelease(gameState, ball, event.target)){ 
      gameState.speed_ = ballSpeed(gameState)
      // Move the ball towards the other kitty
      gameState.interval = setInterval(() => moveBall(gameState, ball, event.target), gameState.speed_ ); 
    } 
  });

}

// function setupCollisionDetection(gameState, ball, crack) {
//   ball.addEventListener("animationiteration", () => {
//     if (isCollision(ball, crack)) {
//       // Handle collision here
//       console.log("Collision detected!");
//       // You can take appropriate actions when a collision is detected
//       // For example, stopping the game or updating the score.
//     } else {
//       // No collision
//       console.log("No collision.");
//     }
//   });
// }
  
export { setupEventListeners };
// export { setupCollisionDetection };
  