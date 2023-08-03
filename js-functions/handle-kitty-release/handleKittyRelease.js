import { kittyCanRelease } from "./kittyCanRelease.js";
import { moveBall } from "../move-ball-functions/moveBall.js";

function handleKittyRelease(event) {
  event.stopPropagation();

  if (kittyCanRelease(event.target)) {
    function pickRandomPath() {
      const paths = ["line", "sine1", "sineCrack"];
      const randomIndex = Math.floor(Math.random() * paths.length);
      return paths[randomIndex];
    }

    const path = "sineCrack";
    // const path = pickRandomPath()

    // Move the ball towards the other kitty
    moveBall(event.target, path);
  }
}

export { handleKittyRelease };
