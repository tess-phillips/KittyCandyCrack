// script.js

import { onKittyRelease } from "./modules/onKittyRelease.js"

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
      
  

  
    // For mouse events
    kitty1.addEventListener("mousedown", (event) => {
      console.log("Mouse down");
      gameState.eventStart = Date.now(); // Record the event start time
    });
  
    kitty2.addEventListener("mousedown", (event) => {
      console.log("Mouse down");
      gameState.eventStart = Date.now(); // Record the event start time
    });
  
    document.addEventListener("mouseup", (event) => {
      console.log("Mouse up");
      event.stopPropagation();
      onKittyRelease(gameState, event.target);
    });
  
    // For touch events
    kitty1.addEventListener("touchstart", (event) => {
      console.log("Touch start");
      gameState.eventStart = Date.now(); // Record the event start time
    });
  
    kitty2.addEventListener("touchstart", (event) => {
      console.log("Touch start");
      gameState.eventStart = Date.now(); // Record the event start time
    });
  
    document.addEventListener("touchend", (event) => {
      console.log("Touch end");
      event.stopPropagation();
      onKittyRelease(gameState, event.target);
    });
  
    // Prevent default behavior on touch events to avoid potential conflicts
    document.body.addEventListener("touchstart", (event) => {
      if (event.target === kitty1 || event.target === kitty2) {
        event.preventDefault();
      }
    });
  });
  