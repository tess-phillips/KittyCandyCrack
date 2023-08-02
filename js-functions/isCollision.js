import {ball, crack} from "../js-globalData/gameObjects.js"

function isCollision() {
      const ballRect = ball.getBoundingClientRect();
      const crackRect = crack.getBoundingClientRect();
    
      // Check for collision
      const collision =
        ballRect.left < crackRect.right &&
        ballRect.right > crackRect.left &&
        ballRect.top < crackRect.bottom &&
        ballRect.bottom > crackRect.top;
    
      // Output the bounding rectangles and collision result to the console
      // console.log('Ball Rect:', ballRect);
      // console.log('Crack Rect:', crackRect);
      // console.log('Collision:', collision);
    
      return collision;
}

export { isCollision}