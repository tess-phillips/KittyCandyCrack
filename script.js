// script.js
document.addEventListener("DOMContentLoaded", () => {
    const kitty1 = document.getElementById("kitty1");
    const kitty2 = document.getElementById("kitty2");
    const ball = document.getElementById("ball");
  
    let ballPositionX = kitty1.offsetLeft + kitty1.offsetWidth / 2 - ball.offsetWidth / 2;
    let has_ball = false;
    let interval;
  
    function moveBall(targetKitty) {
      if (ballPositionX === targetKitty.offsetLeft + targetKitty.offsetWidth / 2 - ball.offsetWidth / 2) {
        clearInterval(interval);
        interval = null;
      } else {
        ballPositionX += ballPositionX < targetKitty.offsetLeft + targetKitty.offsetWidth / 2 - ball.offsetWidth / 2 ? 1 : -1;
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
  
      const targetKitty = kitty_clicked === "kitty1" ? kitty2 : kitty1;
      interval = setInterval(() => moveBall(targetKitty), 10); // Move the ball towards the other kitty
    }
  
    kitty1.addEventListener("click", () => onKittyClick(kitty1));
    kitty2.addEventListener("click", () => onKittyClick(kitty2));
  });
  