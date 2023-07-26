import {moveBall} from "./moveBall.js"

function onKittyRelease(gameState, releasedKitty) {
    const kitty_released = releasedKitty.id;

    if (kitty_released !== "kitty1" && kitty_released !== "kitty2") {
      return; // Do nothing if it's not kitty1 or kitty2 that was released
    }

    gameState.has_ball = (gameState.ballPositionX >= releasedKitty.offsetLeft && gameState.ballPositionX <= releasedKitty.offsetLeft + releasedKitty.offsetWidth);

    if (!gameState.has_ball) {
      return; // Do nothing if the released kitty doesn't have the ball
    }

    const targetKitty = kitty_released === "kitty1" ? kitty2 : kitty1;
    gameState.eventEnd = Date.now(); // Record the event end time
    gameState.timePressed = gameState.eventEnd - gameState.eventStart
    gameState.speed_ = 1/gameState.timePressed
    console.log(gameState.speed_)
    
    gameState.interval = setInterval(() => moveBall(gameState, ball, targetKitty), gameState.speed_ *1000); // Move the ball towards the other kitty

}

export { onKittyRelease };
