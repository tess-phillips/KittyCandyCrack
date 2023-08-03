function animateBallDrop() {
  const ball = document.getElementById("ball");
  ball.style.top = "-100px"; // Set the initial position of the ball above the viewport
  ball.style.display = "block";

  // Animate the ball dropping into the page
  let position = -100;
  const targetPosition = 209; // The final position where the ball should be displayed

  function frame() {
    if (position >= targetPosition) {
      ball.style.top = targetPosition + "px"; // Ensure the ball is at the final position
    } else {
      position += 5; // Increase the position to simulate the ball dropping
      ball.style.top = position + "px";
      requestAnimationFrame(frame); // Request the next animation frame
    }
  }

  requestAnimationFrame(frame);
}

export { animateBallDrop };
