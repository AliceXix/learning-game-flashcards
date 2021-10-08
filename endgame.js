import { getHtmlById } from "./main/generalFunctions.js";
import { pointCounter, startGame } from "./index.js";
import { question } from "./main/visuals.js";
import { firstCard } from "./main/visuals.js";


const flipcard = getHtmlById('flipcard');

/**
 * Replaces the first card of the game with a"endgame- message".
 */
export function gameEnd () {
    firstCard.classList.remove("flipCard")

    question.style.display = 'none';

    flipcard.innerHTML = ''

    flipcard.innerHTML = `
    <h1>Congratulation!</h1>
    <br>
    <p>You made it through all the questions!</p>
    <p>Grades or points don't matter to us, so just go have a donut and enjoy yourself.</p>
    <br>
    <button id="endAll">Clean the desk!</button> <button id="restart">Play again!</button>
    `
    // document.getElementById('points').innerHTML = pointCounter
    const endAll = document.getElementById('endAll')
    const restartAll = document.getElementById('restart');


   endAll.onclick = function () {
       startGame() === false
       window.open('', '_self').close()
   }

    restartAll.onclick = function () {
        window.location.reload(false);
    }
    

    question.style.display = 'none';

    firstCard.classList.remove("flipCard")

}

