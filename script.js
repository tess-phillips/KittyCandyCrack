// script.js
import { setupEventListeners } from "./modules/eventListeners.js";

document.addEventListener("DOMContentLoaded", () => {
  const kitty1 = document.getElementById("kitty1");
  const kitty2 = document.getElementById("kitty2");
  const ball = document.getElementById("ball");

  const gameState = {
    ballPositionX: kitty1.offsetLeft + kitty1.offsetWidth / 2 - ball.offsetWidth / 2,
    has_ball: false,
    interval: null,
    passCounter: 0,
    eventStart: null,
    eventEnd: null,
    timePressed: null,
    speed_: null,
  };

  // Call the setupEventListeners function to set up all the event listeners
  setupEventListeners(gameState, kitty1, kitty2, ball);
});
