import { flashCards } from './main/flashcardsData.js';
import { openPopUpFailed } from './main/visuals.js';
import { firstCard } from './main/visuals.js'
import { removePopUp } from './main/visuals.js'
import { showSolution } from './main/visuals.js'
import { resetToFirstCard } from './main/visuals.js'
import { pushInDom } from './main/textManipulation.js';
import { removeFromDom } from './main/textManipulation.js';
import { domElementsArr } from './main/textManipulation.js'
import { openPopUpRight } from './main/visuals.js'
import { answersArr } from './main/textManipulation.js'
import { modalContent } from './main/visuals.js'
import { getHtmlById } from './main/generalFunctions.js';
import { gameEnd } from './endgame.js';

//const models = getHtmlById('models');


//-----------------------GLOBAL VARIABLES -----------------------//


export var randomObject ;
export var remainingFlashCards;
export var pointCounter = 0;

var audio = new Audio('/background-music.mp3');
audio.play();


//-----------------------ONCLICK EVENTS-----------------------//


firstCard.onclick = function () {
    firstCard.classList.add("flipCard");
}

// Live Event Handlers
document.addEventListener("click", function(event){
    if(event.target.id === "try-again"){
        console.log('you want to try again')
        removePopUp();
       
    } else if (event.target.id === "solution") {
        console.log('you want to see the solution')
        showSolution();
    } else if (event.target.id === "continue") {
        console.log('you want to continue')
        resetToFirstCard()
        startGame();
    }
});



// TODO from Jonathan: Rename flipCard to be more generic (flipElement? flipped?)


/**
 * Returns a remaining array of object after removing the currently used one
 * @param {*} arr 
 * @returns remainingFlashCards
 */
function removeObjectFromArray (arr) {
    const remainingFlashCards = arr.filter(word => word !== randomObject);
    return remainingFlashCards;
}


/**
 * Returns a random object out an array.
 * @param {*} arr 
 * @returns randomObject
 */
function picRandomObject (arr) {
    const randomObject = arr[Math.floor(Math.random() * arr.length)];
    return randomObject;
}


//-----------------------WIN-LOOSE-LOGIC-----------------------//
const models = getHtmlById('models');

/**
 * Deletes content of the original popup and fills with content for the popup when answer is right.
 */
function createPopUpRight () {
    modalContent.innerHTML = `
        <p id="popup-text">Yes that is correct! Awesome!</p>
        <button id="continue">Continue</button>
    `;

    modalContent.classList.add('flipCard-centered')
    modalContent.classList.add('flipCard')
}


/**
 * Deletes content of the original popup and fills with content for the popup when answer is right.
 */
function createPopUpWrong () {
    
    modalContent.innerHTML = `
            <p id="popup-text">OOOps!</p>
            <button id="try-again">tryagian</button>
            <button id="solution">solution show</button>
        `;

}

//------------------------------------------------------//

/**
 * Sets a timer on the first card and the questions
 */
function difficultie () {
        setTimeout(function () { firstCard.classList.add("flipCard"); }, 2000);

        setTimeout(function () {
            createPopUpWrong();
            openPopUpFailed();

            pointCounter -= 1;

            console.log('when wrong' + pointCounter)
        }, 6000)
    }





//-----------------------------------------------------//





answersArr.forEach( element => {
    element.onclick = function () {
        if (element.innerText === randomObject.correctAnswer) {
            
            createPopUpRight();
            openPopUpRight();

            pointCounter += 1;

            console.log('when right' + pointCounter)

        } else {
                
            createPopUpWrong();
            openPopUpFailed();

            pointCounter -= 1;

            console.log('when wrong' + pointCounter)

        }
}})



//-----------------------START A (NEW) GAME-----------------------//


export function startGame () {

    console.log(document.querySelectorAll('#continue'))

    if ( topic.innerHTML === '') {

        randomObject = picRandomObject(flashCards);

        pushInDom(randomObject, domElementsArr);

        remainingFlashCards = removeObjectFromArray(flashCards);

    } else if (remainingFlashCards.length === 0) {


        gameEnd();

        console.log('game end')

    } else if (remainingFlashCards.length === 2) {

        difficultie();

        removeFromDom(domElementsArr);

        randomObject = picRandomObject(remainingFlashCards);

        pushInDom(randomObject, domElementsArr);

        remainingFlashCards = removeObjectFromArray(remainingFlashCards);


    } else {

         removeFromDom(domElementsArr);

        randomObject = picRandomObject(remainingFlashCards);

        pushInDom(randomObject, domElementsArr);

        remainingFlashCards = removeObjectFromArray(remainingFlashCards);

    }


}

startGame();