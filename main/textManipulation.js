import { getHtmlById } from "./generalFunctions.js"


//-----------------------GET THE DOM ELEMENTS-----------------------//



const topic = getHtmlById("topic")
const bullet1 = getHtmlById("bullet1")
const bullet2 = getHtmlById("bullet2")
const bullet3 = getHtmlById("bullet3")
const questionAsked = getHtmlById("questionAsked")
const questionImg = getHtmlById("questionImg")
export const answer1 = getHtmlById("answer1")
export const answer2 = getHtmlById("answer2")
export const answer3 = getHtmlById("answer3")
export const answer4 = getHtmlById("answer4")
const solutionAnswer = getHtmlById("solutionAnswer")
const explenation1 = getHtmlById("explenation1")
const explenation2 = getHtmlById("explenation2")

export const answersArr = [answer1, answer2, answer3, answer4];

export const domElementsArr = [

topic,
bullet1,
bullet2,
bullet3,
questionAsked,
questionImg,
answer1,
answer2,
answer3,
answer4,
solutionAnswer,
explenation1,
explenation2,

]



//-----------------------LOGIC TO ADD-----------------------//

/**
 * Adds the text of the property from the give object to the give domElement.
 * @param {*} domElement 
 * @param {*} object 
 * @returns 
 */
function appendTextToDom(domElement, object) {
    domElement.appendChild(document.createTextNode(object[domElement.id]))
}


/**
 * For each element of an array of DOM elements, will push the appended text into the HTML.
 * @param {*} object 
 * @param {*} arr 
 */
export function pushInDom (object, arr) {

    arr.forEach ( domElement => {
        appendTextToDom(domElement, object);
});

}

//-----------------------LOGIC TO REMOVE-----------------------//

/**
 * Removes the text of the property from the given object of the given domElement.
 * @param {*} domElement 
 * @returns 
 */
function removeTextFromDom(domElement) {
    return domElement.innerHTML = '';
}


/**
 * For each element of an array of DOM elements, will remove the appended text from the HTML.
 * @param {*} arr 
 */
export function removeFromDom (arr) {
    arr.forEach( domElement => {
        removeTextFromDom(domElement);
    });
}

