import { kittyCanRelease } from "./kittyCanRelease.js"
import { moveBall } from "./moveBall.js";
import { ballSpeed } from "./ballSpeed.js";
import { gameState } from "../../js-globalData/gameState.js";

function handleKittyRelease(event) {
    event.stopPropagation();

    

    if (kittyCanRelease(event.target)) {
      // gameState.speed_ = ballSpeed(); I can't work out the best way to do speed

      function pickRandomPath() {
        const paths = ["line", "sine1", "sine2", "goToCrack"];
        const randomIndex = Math.floor(Math.random() * paths.length);
        return paths[randomIndex];
      }

      const path = pickRandomPath();

      // Move the ball towards the other kitty
      gameState.interval = setInterval(() => moveBall(event.target, path), 15);
    }
}

export { handleKittyRelease }