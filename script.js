// script.js
import { setupEventListeners } from "./js-functions/setupEventListeners.js";
import { animateBallDrop } from "./js-functions/animateBallDRop.js";

document.getElementById("startButton").addEventListener("click", function() {
  // Show the game-container and animate the ball
  const gameContainer = document.getElementById("game-container");
  const startButton = document.getElementById("startButton");
  gameContainer.style.display = "block";
  startButton.style.display = "none";  
  animateBallDrop();
});




document.addEventListener("DOMContentLoaded", () => {
  // Call the setupEventListeners function to set up all the event listeners
  setupEventListeners();

});
