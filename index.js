const flashCards = [

{
    topic: "HTML",
    infos: ["is a programming language", "creates structure", "base of every website"],
    question: "What is HTML?",
    questionImg: "helo",
    possibleAnswers: ["a programming language", "a new way of cooking", "a new video game", "an old way to write"],
    answer: "HTML is a programming language",
    explenation: ["-", "-"],
},

{
    topic: "JavaScript",
    infos: ["is a programming language", "creates logic", "uses camelCase"],
    question: "What is the naming convention of JavaScript?",
    questionImg: "helo",
    possibleAnswers: ["be very poetic", "use a lot of numbers", "use CamelCase", "no-one cares"],
    answer: "JavaScript uses camelCases",
    explenation: ["-", "-"],
},

{
    topic: "CSS",
    infos: ["is a programming language", "defines the looks", "always looks messy"],
    question: "How does CSS code looks like?",
    questionImg: "helo",
    possibleAnswers: ["mine is pink, what about you?", "clean, sorted and readable", "like spagetthi!", "it always looks messy"],
    answer: "CSS code always looks messy",
    explenation: ["-", "-"],
}
]

//-----------------------------------------------------------------------//
//-----------------------------------------------------------------------//


//-----------------------GLOBAL VARIABLES -----------------------//


var randomObject ;
var remainingFlashCards;


//-----------------------LOGIC TO SHOW AND FLIP CARDS-----------------------//



//get all the DOM elements needed for the flipping-cards-logic
const card = document.getElementById("cards");
const question = document.getElementById("question");
const flipcard = document.getElementsByClassName("flipcard");
const submit = document.getElementById("submit")

const modal = document.getElementById("myModal");             // Get the modal

const submits = document.getElementById("submit");                 // Get the button that opens the modal

var close = document.getElementById("close");               // Get the <span> element that closes the modal

const solution = document.getElementById("solution");
const model = document.getElementById("models");


//flip the flashcard around to the question by clicking on it
card.onclick = function () {
    card.classList.add("flipCard");
}

//when clicking on submit open failed popup
submits.onclick = function() {
  modal.style.display = "block";            // When the user clicks on the button, open the modal
}

//remove popup when clicking 'try again'
close.onclick = function() {
  modal.style.display = "none";         // When the user clicks on <span> (x), close the modal
}

//flip popup around when clicking 'view solution'
solution.onclick = function () {
     model.classList.add("flipCard");

}


//-----------------------------------------------------------------------//


//-----------------------CREATE NEW CYCLE-----------------------//

//const modelSolution = document.getElementById("model-solution");
//const question = document.getElementById("question");



//the button continue (initiates the new cycle)
const continueGame = document.getElementById("continue");

continueGame.onclick = function () {

    //model.style.display = "none"; 
    //question.style.display = "none";
    card.classList.remove("flipCard")
    //card.style.display = "block";
   //card.css("all", "unset");
    //modelSolution.style.display = "none";
     //modelSolution.classList.add("flipCard");



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
    console.log("removing topic.....")
    console.log(topic)
    // topic.removeChild(document.createTextNode(object.topic));
    topic.innerHTML = '';
}

function removeBullets(object) {
    object.infos.forEach((element, index) => {
        bullets[index].innerHTML = '';
        //removeChild(document.createTextNode(element));
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


//call the function to push text in DOM on the random object of the flashCards array
//pushInDom(randomObject)


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