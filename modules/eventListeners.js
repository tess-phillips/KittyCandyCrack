// eventListeners.js
import { onKittyRelease } from "./onKittyRelease.js"

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
  
    document.addEventListener("mouseup", (event) => {
      console.log("Mouse up");
      event.stopPropagation();
      onKittyRelease(gameState, ball, event.target);
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
  
    document.addEventListener("touchend", (event) => {
      console.log("Touch end");
      event.stopPropagation();
      onKittyRelease(gameState, ball, event.target);
    });
  
    // Prevent default behavior on touch events to avoid potential conflicts
    document.body.addEventListener("touchstart", (event) => {
      if (event.target === kitty1 || event.target === kitty2) {
        event.preventDefault();
      }
    });
}
  
export { setupEventListeners };
  