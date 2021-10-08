import { getHtmlById } from './generalFunctions.js';
import { popSound } from '../index.js';
import { flipSound } from '../index.js';





export const continueGame = getHtmlById("continue");
export const continueGame5 = getHtmlById("continue5");
export const firstCard = getHtmlById("cards");
export const question = getHtmlById("question");
export const modelSolution = getHtmlById("model-solution")
const container = getHtmlById("container")
const modal = getHtmlById("myModal");
export const submits = getHtmlById("submit");
export const tryAgain = getHtmlById("try-again");
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
    popSound.play();
}

export var newItem;

/**
 * Opens the popup when the answer is right.
 */
export function openPopUpRight () {

    modal.style.display = "block";
    question.style.display = "none";
    container.style.display = "block";
    container.classList.add("flipCard");
    popSound.play();

}

export function removePopUp () {
    console.log('the pop-up just has been removed')
    question.style.display = "block";
    container.style.display = "none";
}


export function showSolution () {
    modal.classList.add("flipCard");
    modelSolution.style.display = "block";
    modelSolution.style.backfaceVisibility = "visible"
    modal.style.display = "none";
    //flipSound.play()
}


export function resetToFirstCard () {
    container.style.display="none";
    modelSolution.style.display = "none";
    firstCard.classList.remove("flipCard");
    question.style.display = "block"
    modal.classList.remove("flipCard")
    //flipSound.play();
}