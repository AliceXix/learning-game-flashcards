//import { remainingFlashCards } from './index.js'
//import { randomObject } from './index.js'




/**
 * Gets HTML by the ID - DOM manipulation.
 * @param {*} id 
 * @returns An HTML Node
 */
export function getHtmlById(id) {
    return document.getElementById(id);
}


// /**
//  * Returns a remaining array of object after removing the currently used one
//  * @param {*} arr 
//  * @returns remainingFlashCards
//  */
// export function removeObjectFromArray (arr) {
//     const remainingFlashCards = arr.filter(word => word !== randomObject);
//     return remainingFlashCards;
// }


// /**
//  * Returns a random object out an array.
//  * @param {*} arr 
//  * @returns randomObject
//  */
// export function picRandomObject (arr) {
//     const randomObject = arr[Math.floor(Math.random() * arr.length)];
//     return randomObject;
// }
 