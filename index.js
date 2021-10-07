
// import { testArray  } from './test.js';
import { flashCards } from './main/flashcardsData.js';
import { openPopUpFailed } from './main/visuals.js';
import { firstCard } from './main/visuals.js'
import { submits } from './main/visuals.js'
import { tryAgain } from './main/visuals.js'
import { viewSolution } from './main/visuals.js'
import { removePopUp } from './main/visuals.js'
import { showSolution } from './main/visuals.js'
import { resetToFirstCard } from './main/visuals.js'
import { continueGame } from './main/visuals.js'
import { pushInDom } from './main/textManipulation.js';
import { removeFromDom } from './main/textManipulation.js';
import { domElementsArr } from './main/textManipulation.js'
//import { picRandomObject } from './main/generalFunctions.js'
//import { removeObjectFromArray } from './main/generalFunctions.js'
//import { removeFromDom } from './main/textManipulation.js'

//-----------------------GLOBAL VARIABLES -----------------------//


export var randomObject ;
export var remainingFlashCards;


//-----------------------ONCLICK EVENTS-----------------------//


/**
 * shows question card by flipping flashcard
 */
firstCard.onclick = function () {
    firstCard.classList.add("flipCard");
}

submits.onclick = function() {
  openPopUpFailed();
}

tryAgain.onclick = function() {
    removePopUp()
}

viewSolution.onclick = function () {
     showSolution()
}

continueGame.onclick = function () {
    
    resetToFirstCard()
    startGame();

}

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


//-----------------------START A (NEW) GAME-----------------------//


function startGame () {

    if ( topic.innerHTML === '') {

        randomObject = picRandomObject(flashCards);

        pushInDom(randomObject, domElementsArr);

        remainingFlashCards = removeObjectFromArray(flashCards);

    } else if (remainingFlashCards.length === 0) {


        //TODO:here function to remove any card from screan (target id main-container)
        //
        console.log('game end')



    } else {

         removeFromDom(domElementsArr);

        randomObject = picRandomObject(remainingFlashCards);

        pushInDom(randomObject, domElementsArr);

        remainingFlashCards = removeObjectFromArray(remainingFlashCards);

    }


}

startGame();


//-----------------------------------------------------------------------//


//-----------------------HOW TO's-----------------------//

// //how to get and set text into html

// //var node = document.createElement("div");                 // Create a <div> node
// var textnode = document.createTextNode("the text I want");         // Create a text node
// topic.appendChild(textnode);                              // Append the text to <li>
// //document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"