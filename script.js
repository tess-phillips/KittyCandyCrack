// script.js
document.addEventListener("DOMContentLoaded", () => {
    const kitty1 = document.getElementById("kitty1");
    const kitty2 = document.getElementById("kitty2");
    const ball = document.getElementById("ball");
  
    let ballPositionX = kitty1.offsetLeft + kitty1.offsetWidth / 2 - ball.offsetWidth / 2;
    let has_ball = false;
    let interval;
    let passCounter = 0; // Counter for passes
  
    function moveBall(targetKitty) {
      if (ballPositionX === targetKitty.offsetLeft + targetKitty.offsetWidth / 2 - ball.offsetWidth / 2) {
        clearInterval(interval);
        interval = null;
        passCounter++; // Increment pass counter when a pass is complete
        console.log("Passes:", passCounter);
      } else {
        ballPositionX += ballPositionX < targetKitty.offsetLeft + targetKitty.offsetWidth / 2 - ball.offsetWidth / 2 ? 1 : -1;
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
      interval = setInterval(() => moveBall(targetKitty), 10); // Move the ball towards the other kitty
    }
  
    // For mouse events
    kitty1.addEventListener("mouseup", () => onKittyRelease(kitty1));
    kitty2.addEventListener("mouseup", () => onKittyRelease(kitty2));
  
    // For touch events
    kitty1.addEventListener("touchend", () => onKittyRelease(kitty1));
    kitty2.addEventListener("touchend", () => onKittyRelease(kitty2));
  
    // Prevent default behavior on touch events to avoid potential conflicts
    document.body.addEventListener("touchstart", (event) => {
      if (event.target === kitty1 || event.target === kitty2) {
        event.preventDefault();
      }
    });
  });
  