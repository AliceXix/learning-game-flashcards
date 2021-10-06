import { getHtmlById } from './generalFunctions.js';




export const continueGame = getHtmlById("continue");
export const firstCard = getHtmlById("cards");
export const question = getHtmlById("question");
const modelSolution = getHtmlById("model-solution")
const container = getHtmlById("container")
const modal = getHtmlById("myModal");             // Get the modal
export const submits = getHtmlById("submit");                 // Get the button that opens the modal
export const tryAgain = getHtmlById("try-again");               // Get the element that closes the modal
export const viewSolution = getHtmlById("solution");


/**
 * Opens the popup when the answer is wrong.
 */
export function openPopUpFailed () {
    modal.style.display = "block";
    question.style.display = "none";
    container.style.display = "block";
    container.classList.add("flipCard");
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