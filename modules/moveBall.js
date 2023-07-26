function moveBall(gameState, targetKitty) {
    const speed = 2; // Number of pixels the ball moves on each update
  
    if (gameState.ballPositionX === targetKitty.offsetLeft + targetKitty.offsetWidth / 2 - ball.offsetWidth / 2) {
      clearInterval(gameState.interval);
      gameState.interval = null;
      gameState.passCounter++; // Increment pass counter when a pass is complete
      console.log("Passes:", gameState.passCounter);
      console.log("Time taken:", gameState.eventEnd - gameState.eventStart, "milliseconds");
    } else {
      gameState.ballPositionX += gameState.ballPositionX < targetKitty.offsetLeft + targetKitty.offsetWidth / 2 - ball.offsetWidth / 2 ? speed : -speed;
      ball.style.left = gameState.ballPositionX + "px";
    }
}

export { moveBall };
