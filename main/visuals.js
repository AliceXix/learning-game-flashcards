import { getHtmlById } from './generalFunctions.js';
import { popSound } from '../index.js';


export const continueGame = getHtmlById("continue");
export const continueGame5 = getHtmlById("continue5");
export const firstCard = getHtmlById("card-container");
export const cardBack = getHtmlById("card-back");
export const modelSolution = getHtmlById("model-solution")
const popupContainer = getHtmlById("popup-container")
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
    cardBack.style.display = "none";
    popupContainer.style.display = "block";
    popupContainer.classList.add("flipCard");
    popSound.play();
}

export var newItem;

/**
 * Opens the popup when the answer is right.
 */
export function openPopUpRight () {

    modal.style.display = "block";
    cardBack.style.display = "none";
    popupContainer.style.display = "block";
    popupContainer.classList.add("flipCard");
    popSound.play();

}

export function removePopUp () {
    console.log('the pop-up just has been removed')
    cardBack.style.display = "block";
    popupContainer.style.display = "none";
}


export function showSolution () {
    modal.classList.add("flipCard");
    modelSolution.style.display = "block";
    modelSolution.style.backfaceVisibility = "visible"
    modal.style.display = "none";
}


export function resetToFirstCard () {
    popupContainer.style.display="none";
    modelSolution.style.display = "none";
    firstCard.classList.remove("flipCard");
    cardBack.style.display = "block"
    modal.classList.remove("flipCard")
}