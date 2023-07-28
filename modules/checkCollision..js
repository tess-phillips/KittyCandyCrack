function checkCollision(ball, spot) {
    const ballRect = ball.getBoundingClientRect();
    const spotRect = spot.getBoundingClientRect();
  
    // Check for collision between the ball and the spot
    if (
      ballRect.left < spotRect.right &&
      ballRect.right > spotRect.left &&
      ballRect.top < spotRect.bottom &&
      ballRect.bottom > spotRect.top
    ) {
      // Collision detected
      return true;
    }
  
    // No collision
    return false;
}
  