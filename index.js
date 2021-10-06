
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
//import { removeFromDom } from './main/textManipulation.js'

//-----------------------GLOBAL VARIABLES -----------------------//


var randomObject ;
var remainingFlashCards;


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


//-----------------------ADDITIONAL-----------------------//

//function to remove the currently displayed object from the array
function removeObjectFromArray () {
    //TODO: this is wrong! you can use this ONLY with the original arr, but WANT to use it at every game cycle!!
    const remainingFlashCards = flashCards.filter(word => word !== randomObject);
    return remainingFlashCards;

}

//take a random object (randomObject) from an array
function picRandomObject (arr) {

    const randomObject = arr[Math.floor(Math.random() * arr.length)];
    return randomObject;

}


//-----------------------------------------------------------------------//


//-----------------------START A (NEW) GAME-----------------------//


function startGame () {

    if ( topic.innerHTML === '') {//this is the first game

        //pick a random object
            //this returns an object --> randomObject
        randomObject = picRandomObject(flashCards);
        //console.log(randomObject)

        pushInDom(randomObject, domElementsArr)
        //console.log(domElementsArr)

        //remove currently displayed object from array
            //this returns a new array --> remainingFlashCards
        remainingFlashCards = removeObjectFromArray();
        //console.log(remainingFlashCards)

    } else {

        //remove all the currently displayed text
         removeFromDom(domElementsArr);

        //randomly pic a new object from remainingFlashCards array
            //this returns an object --> randomObject
        randomObject = picRandomObject(remainingFlashCards);

        //add text of new object from remaining array
        //pushInDom(randomObject);
        pushInDom(randomObject, domElementsArr)

        //remove currently displayed object from array
            //this returns a new array --> remainingFlashCards
        remainingFlashCards = removeObjectFromArray();

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