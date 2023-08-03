// kittyCanRelease.js
import { isMostlyOverlapping } from "../check-for-collisions/isMostlyOverlapping.js";

function kittyCanRelease(releasedKitty) {
  var kittyCanReleaseBool = true
  const kitty_released = releasedKitty.id;

  if (kitty_released !== "kitty1" && kitty_released !== "kitty2") {
    kittyCanReleaseBool = false; // Do nothing if it's not kitty1 or kitty2 that was released
    return kittyCanReleaseBool
  }

  if (!isMostlyOverlapping(ball, releasedKitty)) {
    kittyCanReleaseBool = false;
    return kittyCanReleaseBool; // Do nothing if the released kitty doesn't have the ball
  }

  return kittyCanReleaseBool
}

export { kittyCanRelease };
