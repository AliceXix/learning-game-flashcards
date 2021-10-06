// TODO from Jonathan: rename test to a sensible filename, like flashCardData
import { testArray  } from './test.js';
import { flashCards } from './test.js';

import * as lib from './test.js'




//-----------------------------------------------------------------------//
//-----------------------------------------------------------------------//


//-----------------------GLOBAL VARIABLES -----------------------//


var randomObject ;
var remainingFlashCards;


//-----------------------LOGIC TO SHOW AND FLIP CARDS-----------------------//

/**
 * Gets HTML by the ID - DOM manipulation.
 * @param {*} id 
 * @returns An HTML Node
 */
function getHtmlById(id) {
    return document.getElementById(id);
}


const card = getHtmlById("cards");
const question = getHtmlById("question");
const modelSolution = getHtmlById("model-solution")
const container = getHtmlById("container")
const modal = getHtmlById("myModal");             // Get the modal
const submits = getHtmlById("submit");                 // Get the button that opens the modal
const close = getHtmlById("close");               // Get the element that closes the modal
const solution = getHtmlById("solution");

const model = document.getElementById("models");
const flipcardId = document.getElementById("flipcard")
const mainContainer = document.getElementById("main-container")
const flipcard = document.getElementsByClassName("flipcard");
const submit = document.getElementById("submit")


//flip the flashcard around to the question by clicking on it
card.onclick = function () {
    console.log('henlo')
    card.classList.add("flipCard");
}

//when clicking on submit open failed popup
submits.onclick = function() {
    // TODO from Jonathan: put these 2 lines in 1 function that explains what it does
  openPopUpFailed();

}


/**
 * Opens the popup when the answer is wrong.
 */
 function openPopUpFailed () {
    modal.style.display = "block";
    question.style.display = "none";
    container.style.display = "block";
    container.classList.add("flipCard");
}


//remove popup when clicking 'try again'
close.onclick = function() {
    // TODO from Jonathan: put these 2 lines in 1 function that explains what it does
    question.style.display = "block";
  modal.style.display = "none";         // When the user clicks on <span> (x), close the modal
}

//flip popup around when clicking 'view solution'
solution.onclick = function () {
    // TODO from Jonathan: put these 4 lines in 1 function that explains what it does
    // for example: showSolution
     modal.classList.add("flipCard");
     modelSolution.style.display = "block";
     modelSolution.style.backfaceVisibility = "visible"
     modal.style.display = "none";
}

// TODO from Jonathan: Rename flipCard to be more generic (flipElement? flipped?)

//-----------------------------------------------------------------------//


//-----------------------CREATE NEW CYCLE-----------------------//


//the button continue (initiates the new cycle)
const continueGame = document.getElementById("continue");

continueGame.onclick = function () {
    
    container.style.display="none";
    modelSolution.style.display = "none";
    card.classList.remove("flipCard");
    question.style.display = "block"
    modal.classList.remove("flipCard")
    
    startGame();

}


//--------------------------------------------------------------------//


//get all the elements that change text with each cycle
const topic = document.getElementById("topic")
const bullet1 = document.getElementById("bullet1")
const bullet2 = document.getElementById("bullet2")
const bullet3 = document.getElementById("bullet3")
const questionAsked = document.getElementById("question-asked")
const questionImg = document.getElementById("question-img")
const answer1 = document.getElementById("answer1")
const answer2 = document.getElementById("answer2")
const answer3 = document.getElementById("answer3")
const answer4 = document.getElementById("answer4")
const solutionAnswer = document.getElementById("solution-answer")
const explenation1 = document.getElementById("explenation1")
const explenation2 = document.getElementById("explenation2")
const bullets = [bullet1, bullet2, bullet3];
const answers = [answer1, answer2, answer3, answer4];
const explenations = [explenation1, explenation2];


//-----------------------------------------------------------------------//



//-----------------------ADD ALL THE NODES TO THE DOM-----------------------//

function appendTopic(object) {
    topic.appendChild(document.createTextNode(object.topic));
}

function appendBullets(object) {
    object.infos.forEach((element, index) => {
        bullets[index].appendChild(document.createTextNode(element));
    })
}

function appendQuestionAsked(object) {
    questionAsked.appendChild(document.createTextNode(object.question));
}

function appendQuestionImg(object) {
    questionImg.appendChild(document.createTextNode(object.questionImg));
}

function appendAnswers(object) {
    object.possibleAnswers.forEach((element, index) => {
        answers[index].appendChild(document.createTextNode(element));
    })
}

function appendSolutionAnswer(object) {
    solutionAnswer.appendChild(document.createTextNode(object.answer));
}

function appendExplenations(object) {
    object.explenation.forEach((element, index) => {
        explenations[index].appendChild(document.createTextNode(element));
    })
}


//-----------------------------------------------------------------------//


//-----------------------REMOVE ALL THE NODES FROM THE DOM-----------------------//


function removeTopic(object) {
    topic.innerHTML = '';
}

function removeBullets(object) {
    object.infos.forEach((element, index) => {
        bullets[index].innerHTML = '';
    })
}

function removeQuestionAsked(object) {
    questionAsked.innerHTML = '';
}

function removeQuestionImg(object) {
    questionImg.innerHTML = '';
}

function removeAnswers(object) {
    object.possibleAnswers.forEach((element, index) => {
        answers[index].innerHTML = '';
    })
}

function removeSolutionAnswer(object) {
    solutionAnswer.innerHTML = '';
}

function removeExplenations(object) {
    object.explenation.forEach((element, index) => {
        explenations[index].innerHTML = '';
    })
}


//-----------------------------------------------------------------------//


//-----------------------LOGIC TO ADD-----------------------//


//function to push an object texts into DOM
function pushInDom (object) {

    appendTopic(object);

    appendBullets(object);

    appendQuestionAsked(object);

    appendQuestionImg(object);

    appendAnswers(object);

    appendSolutionAnswer(object);

    appendExplenations(object);

}


//-----------------------------------------------------------------------//


//-----------------------LOGIC TO REMOVE-----------------------//


//function to remove an object texts into DOM
function removeFromDom (currentObject) {

    removeTopic(currentObject); //

   removeBullets(currentObject);

    removeQuestionAsked(currentObject);

    removeQuestionImg(currentObject);

    removeAnswers(currentObject);

    removeSolutionAnswer(currentObject);

    removeExplenations(currentObject);

}


//-----------------------------------------------------------------------//


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

        //display text of random object
        pushInDom(randomObject);

        //remove currently displayed object from array
            //this returns a new array --> remainingFlashCards
        remainingFlashCards = removeObjectFromArray();

    } else {

        //remove all the currently displayed text
         removeFromDom(randomObject);

        //randomly pic a new object from remainingFlashCards array
            //this returns an object --> randomObject
        randomObject = picRandomObject(remainingFlashCards);

        //add text of new object from remaining array
        pushInDom(randomObject);

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