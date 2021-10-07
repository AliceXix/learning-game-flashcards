import { getHtmlById } from './generalFunctions.js';
import { startGame } from '../index.js';





export const continueGame = getHtmlById("continue");
export const continueGame5 = getHtmlById("continue5");
export const firstCard = getHtmlById("cards");
export const question = getHtmlById("question");
export const modelSolution = getHtmlById("model-solution")
const container = getHtmlById("container")
const modal = getHtmlById("myModal");             // Get the modal
export const submits = getHtmlById("submit");                 // Get the button that opens the modal
export const tryAgain = getHtmlById("try-again");               // Get the element that closes the modal
export const viewSolution = getHtmlById("solution");
export const modalContent = getHtmlById("modal-content");
export const popupText = getHtmlById("popup-text");


/**
 * Opens the popup when the answer is wrong.
 */
export function openPopUpFailed () {
    modal.style.display = "block";
    question.style.display = "none";
    container.style.display = "block";
    container.classList.add("flipCard");
}


/**
 * Opens the popup when the answer is right.
 */
export function openPopUpRight () {

    const newItem = document.createElement('button');
    newItem.innerHTML = 'Continue';
    newItem.setAttribute("id", "continue");

    newItem.onclick = function() {

        resetToFirstCard()
        startGame();
        console.log('now')
    }
    

    viewSolution.parentNode.replaceChild(newItem, viewSolution);

    modal.style.display = "block";
    question.style.display = "none";
    container.style.display = "block";
    container.classList.add("flipCard");

    console.log(continueGame)


//     continueGame.onclick = function () {
    
//     console.log('helo')

//     resetToFirstCard()
//     startGame();

// }

    console.log(document.querySelectorAll('#continue'))
    

}


export function removePopUp () {
    question.style.display = "block";
    modal.style.display = "none";  
}


export function showSolution () {
    modal.classList.add("flipCard");
    modelSolution.style.display = "block";
    modelSolution.style.backfaceVisibility = "visible"
    modal.style.display = "none";
}


export function resetToFirstCard () {
    container.style.display="none";
    modelSolution.style.display = "none";
    firstCard.classList.remove("flipCard");
    question.style.display = "block"
    modal.classList.remove("flipCard")
}