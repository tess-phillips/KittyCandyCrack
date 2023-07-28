// kittyCanRelease.js

function kittyCanRelease(gameState, releasedKitty) {
  const kittyCanReleaseBool = true
  const kitty_released = releasedKitty.id;

  if (kitty_released !== "kitty1" && kitty_released !== "kitty2") {
    kittyCanReleaseBool = false; // Do nothing if it's not kitty1 or kitty2 that was released
    return kittyCanReleaseBool
  }

  gameState.has_ball = (gameState.ballPositionX >= releasedKitty.offsetLeft && gameState.ballPositionX <= releasedKitty.offsetLeft + releasedKitty.offsetWidth);

  if (!gameState.has_ball) {
    kittyCanReleaseBool = false;
    return kittyCanReleaseBool; // Do nothing if the released kitty doesn't have the ball
  }

  return kittyCanReleaseBool
}

export { kittyCanRelease };
