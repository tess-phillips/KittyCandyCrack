import { gameState } from "../gameState.js";

function handleMouseDownOrTouchStart() {
    // console.log("Mouse down / Touch start");
    gameState.eventStart = Date.now(); // Record the event start time
  }

export {handleMouseDownOrTouchStart}