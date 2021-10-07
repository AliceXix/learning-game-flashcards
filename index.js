
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
import { answer1 } from './main/textManipulation.js'
import { answer2} from './main/textManipulation.js'
import { answer3 } from './main/textManipulation.js'
import { answer4 } from './main/textManipulation.js'
import { openPopUpRight } from './main/visuals.js'
import { answersArr } from './main/textManipulation.js'
import { modelSolution } from './main/visuals.js'
import { modalContent } from './main/visuals.js'
import { popupText } from './main/visuals.js'
import { getHtmlById } from './main/generalFunctions.js';
import { gameEnd } from './endgame.js';
import { continueGame5 } from './main/visuals.js'

//import { picRandomObject } from './main/generalFunctions.js'
//import { removeObjectFromArray } from './main/generalFunctions.js'
//import { removeFromDom } from './main/textManipulation.js'

//-----------------------GLOBAL VARIABLES -----------------------//


export var randomObject ;
export var remainingFlashCards;
export var points = 0;


//-----------------------ONCLICK EVENTS-----------------------//


/**
 * shows question card by flipping flashcard
 */
firstCard.onclick = function () {
    firstCard.classList.add("flipCard");
}

tryAgain.onclick = function() {
    removePopUp()
}

viewSolution.onclick = function () {
     showSolution()
}

continueGame.onclick = function () {
    
    console.log('helo')

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


//-----------------------WIN-LOOSE-LOGIC-----------------------//


answersArr.forEach( element => {
    element.onclick = function () {
        if (element.innerText === randomObject.correctAnswer) {
            
            

            console.log(document.querySelectorAll('#continue'))
            popupText.innerHTML = 'Yes that is correct! Awesome!'

            modelSolution.innerHTML = '';

            modalContent.removeChild(tryAgain);

            openPopUpRight();
            
            points + 1;

        } else {
                openPopUpFailed();

                points - 1;
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


        //TODO:here function to remove any card from screen (target id main-container)
            //not sure if still needed need to test when continue button fixed


        gameEnd();

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