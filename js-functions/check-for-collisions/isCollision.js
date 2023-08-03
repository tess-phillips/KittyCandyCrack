import {ball, crack} from "../../js-globalData/gameObjects.js"

function isTouching() {
      const ballRect = ball.getBoundingClientRect();
      const crackRect = crack.getBoundingClientRect();
    
      // Check for collision
      const collision =
        ballRect.left < crackRect.right &&
        ballRect.right > crackRect.left &&
        ballRect.top < crackRect.bottom &&
        ballRect.bottom > crackRect.top;

      return collision;
}

function isMostlyOverlapping() {
  const ball = document.getElementById("ball");
  const crack = document.getElementById("crack");

  const ballRect = ball.getBoundingClientRect();
  const crackRect = crack.getBoundingClientRect();

  // Calculate the intersection rectangle
  const intersection = {
    left: Math.max(ballRect.left, crackRect.left),
    right: Math.min(ballRect.right, crackRect.right),
    top: Math.max(ballRect.top, crackRect.top),
    bottom: Math.min(ballRect.bottom, crackRect.bottom)
  };

  // Calculate the area of the ball and the intersection
  const ballArea = (ballRect.right - ballRect.left) * (ballRect.bottom - ballRect.top);
  const intersectionArea = Math.max(0, intersection.right - intersection.left) *
                           Math.max(0, intersection.bottom - intersection.top);

  // Check if the intersection area is more than 50% of the ball area
  return (intersectionArea > ballArea * 0.5);
}


export { isTouching , isMostlyOverlapping}