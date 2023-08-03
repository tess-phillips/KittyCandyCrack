function isTouching(elt1, elt2) {
    const ballRect = elt1.getBoundingClientRect();
    const crackRect = elt2.getBoundingClientRect();
  
    // Check for collision
    const collision =
      ballRect.left < crackRect.right &&
      ballRect.right > crackRect.left &&
      ballRect.top < crackRect.bottom &&
      ballRect.bottom > crackRect.top;
  
    return collision;
  }

export { isTouching }