const gameState = {
    ballPositionX: kitty1.offsetLeft + kitty1.offsetWidth / 2 - ball.offsetWidth / 2,
    ballPositionY: 209,
    has_ball: false,
    // interval: null,
    passCounter: 0,
    eventStart: null,
    eventEnd: null,
    timePressed: null,
    speed_: null,
    step: null,
    collisionDetected: false
};

export { gameState }


// kitty1ball coords: (kitty1.offsetLeft + kitty1.offsetWidth / 2 - ball.offsetWidth / 2, 209)