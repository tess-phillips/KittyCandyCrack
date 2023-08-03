// ballSpeed.js
import { gameState } from "../../js-globalData/gameState.js";

function ballSpeed(){
    gameState.eventEnd = Date.now(); // Record the event end time
    gameState.timePressed = gameState.eventEnd - gameState.eventStart

    if (gameState.timePressed >= 2000){ //hold for long so speed is fast
    gameState.speed_ = 3
    } else if (gameState.timePressed >= 500) {//hold not long so speed slow
    gameState.speed_ = 2
    } else { // slow version (just a click)
    gameState.speed_ = 1
    }

    console.log(gameState.speed_, "speed (bigger is slower)")
    return gameState.speed_*2
}

export { ballSpeed }