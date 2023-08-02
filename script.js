// script.js
import { setupEventListeners } from "./modules/eventListeners.js";
import { gameState } from "./gameState.js";

document.addEventListener("DOMContentLoaded", () => {
  const kitty1 = document.getElementById("kitty1");
  const kitty2 = document.getElementById("kitty2");
  const ball = document.getElementById("ball");
  const crack = document.getElementById("crack"); // Replace "crack" with the actual ID of your 'crack' element

  // const gameState = {
  //   ballPositionX: kitty1.offsetLeft + kitty1.offsetWidth / 2 - ball.offsetWidth / 2,
  //   has_ball: false,
  //   interval: null,
  //   passCounter: 0,
  //   eventStart: null,
  //   eventEnd: null,
  //   timePressed: null,
  //   speed_: null,
  // };

  // Call the setupEventListeners function to set up all the event listeners
  setupEventListeners(kitty1, kitty2, ball, crack);

});
