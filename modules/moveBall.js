function moveBall(gameState, ball, targetKitty) {
  const speed = 1; // Number of pixels the ball moves on each update
  // below simulates the random path
  const amplitude = Math.floor(Math.random() * 3);; // Amplitude of the sine wave
  const frequency = 0.02; // Frequency of the sine wave
  const verticalSpeed = 1; // Speed of vertical movement

  const startX = gameState.ballPositionX;
  const startY = ball.offsetTop;

  const endX = targetKitty.offsetLeft + targetKitty.offsetWidth / 2 - ball.offsetWidth / 2;
  const endY = targetKitty.offsetTop + targetKitty.offsetHeight / 2 - ball.offsetHeight / 2;

  if (gameState.ballPositionX === endX) {
    const xOffsetEND = amplitude * Math.sin(frequency * gameState.ballPositionX);
    console.log(xOffsetEND)
    clearInterval(gameState.interval);
    gameState.interval = null;
    gameState.passCounter++; // Increment pass counter when a pass is complete
    console.log("Passes:", gameState.passCounter);
    console.log("Time taken:", gameState.eventEnd - gameState.eventStart, "milliseconds");
  } else {
    gameState.ballPositionX += gameState.ballPositionX < endX ? speed : -speed;
    
    // Calculate horizontal position with sine function
    const xOffset = amplitude * Math.sin(frequency * gameState.ballPositionX);
    const ballY = startY + ((endY - startY) / (endX - startX)) * (gameState.ballPositionX - startX) + xOffset;
    
    ball.style.left = gameState.ballPositionX + "px";
    ball.style.top = ballY + "px";
  }
}

export { moveBall };
