import { getHtmlById } from "./main/generalFunctions.js";
import { points } from "./index.js";



const flipcard = getHtmlById('flipcard');


/**
 * Replaces the first card of the game with a"endgame- message".
 */
export function gameEnd () {

    const endCard = document.createElement('div');
    const endMsg = document.createTextNode('Congratulation! You made it through all the questions! You total score is:' + points);

    endCard.appendChild(endMsg);
    flipcard.replaceChild(flipcard, endCard);


}