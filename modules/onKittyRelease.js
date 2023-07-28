import {moveBall} from "./moveBall.js"

function onKittyRelease(gameState, ball, releasedKitty) {
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
    if (gameState.timePressed > 2000){ //hold for long so speed is fast
      gameState.speed_ = 2
    } else if (gameState.timePressed < 2000 && gameState.timePressed > 500) {//hold not long so speed slow
      gameState.speed_ = 5
    } else { // slow version (just a click)
      gameState.speed_ = 15
    }

    console.log(gameState.speed_)
    gameState.interval = setInterval(() => moveBall(gameState, ball, targetKitty), gameState.speed_ ); // Move the ball towards the other kitty

}

export { onKittyRelease };
