// script.js
document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("game-container");
    const kitty1 = document.getElementById("kitty1");
    const kitty2 = document.getElementById("kitty2");
    const ball = document.getElementById("ball");
  
    // Set the initial position of the ball on top of "kitty1"
    let ballPositionX = kitty1.offsetLeft + kitty1.offsetWidth / 2 - ball.offsetWidth / 2;
    let has_ball = false;
    let interval;
  
    function moveBall() {
      if (ballPositionX >= kitty2.offsetLeft - ball.offsetWidth) {
        clearInterval(interval);
      } else {
        ballPositionX += 1;
        ball.style.left = ballPositionX + "px";
      }
    }
  
    function onKittyClick(clickedKitty) {
      const kitty_clicked = clickedKitty.id;
  
      if (kitty_clicked !== "kitty1" && kitty_clicked !== "kitty2") {
        return; // Do nothing if it's not kitty1 or kitty2 that was clicked
      }
  
      has_ball = (ballPositionX >= clickedKitty.offsetLeft && ballPositionX <= clickedKitty.offsetLeft + clickedKitty.offsetWidth);
  
      if (!has_ball) {
        return; // Do nothing if the clicked kitty doesn't have the ball
      }
  
      interval = setInterval(moveBall, 10); // Move the ball if the clicked kitty has the ball
    }
  
    kitty1.addEventListener("click", () => onKittyClick(kitty1));
    kitty2.addEventListener("click", () => onKittyClick(kitty2));
  });
  