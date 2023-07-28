// ballSpeed.js

function ballSpeed(gameState){
    gameState.eventEnd = Date.now(); // Record the event end time
    gameState.timePressed = gameState.eventEnd - gameState.eventStart

    if (gameState.timePressed >= 2000){ //hold for long so speed is fast
    gameState.speed_ = 2
    } else if (gameState.timePressed >= 500) {//hold not long so speed slow
    gameState.speed_ = 5
    } else { // slow version (just a click)
    gameState.speed_ = 15
    }

    console.log(gameState.speed_)
    return gameState.speed_
}

export { ballSpeed }