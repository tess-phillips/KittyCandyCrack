import { kittyCanRelease } from "./kittyCanRelease.js"
import { moveBall } from "./moveBall.js";
import { ballSpeed } from "./ballSpeed.js";
import { gameState } from "../../js-globalData/gameState.js";

function handleKittyRelease(event) {
    event.stopPropagation();
    if (kittyCanRelease(event.target)) {
      // gameState.speed_ = ballSpeed(); I can't work out the best way to do speed

      // this is randomly chosen to simulate more different paths
      const amplitude = Math.floor(Math.random() * 3);; // Amplitude of the sine wave
      // Move the ball towards the other kitty
      gameState.interval = setInterval(() => moveBall(event.target, amplitude), 10);
    }
}

export { handleKittyRelease }