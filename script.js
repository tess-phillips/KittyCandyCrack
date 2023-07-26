// script.js
document.addEventListener("DOMContentLoaded", () => {
    const kitty1 = document.getElementById("kitty1");
    const kitty2 = document.getElementById("kitty2");
    const ball = document.getElementById("ball");
  
    let ballPositionX = kitty1.offsetLeft + kitty1.offsetWidth / 2 - ball.offsetWidth / 2;
    let has_ball = false;
    let interval;
    let passCounter = 0; // Counter for passes
    let eventStart; // Timestamp for event start
    let eventEnd; // Timestamp for event end
    let timePressed
    let speed
  
    function moveBall(targetKitty) {
        const speed = 2; // Number of pixels the ball moves on each update
      
        if (ballPositionX === targetKitty.offsetLeft + targetKitty.offsetWidth / 2 - ball.offsetWidth / 2) {
          clearInterval(interval);
          interval = null;
          passCounter++; // Increment pass counter when a pass is complete
          console.log("Passes:", passCounter);
          console.log("Time taken:", eventEnd - eventStart, "milliseconds");
        } else {
          ballPositionX += ballPositionX < targetKitty.offsetLeft + targetKitty.offsetWidth / 2 - ball.offsetWidth / 2 ? speed : -speed;
          ball.style.left = ballPositionX + "px";
        }
      }
      
  
    function onKittyRelease(releasedKitty) {
      const kitty_released = releasedKitty.id;
  
      if (kitty_released !== "kitty1" && kitty_released !== "kitty2") {
        return; // Do nothing if it's not kitty1 or kitty2 that was released
      }
  
      has_ball = (ballPositionX >= releasedKitty.offsetLeft && ballPositionX <= releasedKitty.offsetLeft + releasedKitty.offsetWidth);
  
      if (!has_ball) {
        return; // Do nothing if the released kitty doesn't have the ball
      }
  
      const targetKitty = kitty_released === "kitty1" ? kitty2 : kitty1;
      eventEnd = Date.now(); // Record the event end time
      timePressed = eventEnd - eventStart
      speed = 1/timePressed
      console.log(speed)
      
      interval = setInterval(() => moveBall(targetKitty), speed*1000); // Move the ball towards the other kitty

    }
  
    // For mouse events
    kitty1.addEventListener("mousedown", (event) => {
      console.log("Mouse down");
      eventStart = Date.now(); // Record the event start time
    });
  
    kitty2.addEventListener("mousedown", (event) => {
      console.log("Mouse down");
      eventStart = Date.now(); // Record the event start time
    });
  
    document.addEventListener("mouseup", () => {
      console.log("Mouse up");
      onKittyRelease(event.target);
    });
  
    // For touch events
    kitty1.addEventListener("touchstart", (event) => {
      console.log("Touch start");
      eventStart = Date.now(); // Record the event start time
    });
  
    kitty2.addEventListener("touchstart", (event) => {
      console.log("Touch start");
      eventStart = Date.now(); // Record the event start time
    });
  
    document.addEventListener("touchend", (event) => {
      console.log("Touch end");
      onKittyRelease(event.target);
    });
  
    // Prevent default behavior on touch events to avoid potential conflicts
    document.body.addEventListener("touchstart", (event) => {
      if (event.target === kitty1 || event.target === kitty2) {
        event.preventDefault();
      }
    });
  });
  