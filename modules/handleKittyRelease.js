import { kittyCanRelease } from "./kittyCanRelease.js"
import { moveBall } from "./moveBall.js";
import { ballSpeed } from "./ballSpeed.js";
import { gameState } from "../gameState.js";

function handleKittyRelease(event) {
    // console.log(event.type);
    event.stopPropagation();
    // console.log(kittyCanRelease(event.target))
    if (kittyCanRelease(event.target)) {
      gameState.speed_ = ballSpeed();
      const amplitude = Math.floor(Math.random() * 3);; // Amplitude of the sine wave
      // Move the ball towards the other kitty
      gameState.interval = setInterval(() => moveBall(event.target, amplitude), gameState.speed_);
    }
}

export { handleKittyRelease }