const flashCards = [

{
    topic: "HTML",
    infos: ["is a programming language", "creates structure", "base of every website"],
    question: "what is the result of 3 + 6 ? ",
    questionImg: "helo",
    possibleAnswers: ["answer one", "answer two", "answer 3", "answer 4"],
},

{
    topic: "JavaScript",
    infos: ["is a programming language", "creates logic", "uses camelCase"],
    question: "what is the result of 3 + 6 ? ",
    questionImg: "helo",
    possibleAnswers: ["answer one", "answer two", "answer 3", "answer 4"],
}
]

//-----------------------------------------------------------------------//

const answerCards = [

{
    answer: "this is a solution",
    explenation: ["reason 1", "reason 2"]
},

{
    answer: "this is a solution too",
    explenation: ["reason 1.0", "reason 2.0"]
}
]


//-----------------------------------------------------------------------//


const card = document.getElementById("cards");
const question = document.getElementsByClassName("question");
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

//create a new cycle

//the button continue (initiates the new cycle)
const continueGame = document.getElementById("continue");

continueGame.onclick = function () {
    //execute here function to set new text into DOM
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


//Append all the text from the objects to the DOM (html)

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


//Logic to show each cycle

//TODO: this needs to take one object for one cycle
flashCards.forEach(element => {
    appendBullets(element)
})




//-----------------------------------------------------------------------//


//-----------------------HOW TO's-----------------------//

// //how to get and set text into html

// //var node = document.createElement("div");                 // Create a <div> node
// var textnode = document.createTextNode("the text I want");         // Create a text node
// topic.appendChild(textnode);                              // Append the text to <li>
// //document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"