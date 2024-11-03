// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// function forbiddenLetter(char, arr) {
//     return !arr.some((word) => word.includes(char))
// }

// function forbiddenLetter(char, arr) {
//     return arr.every((word) => !word.includes(char))
// }

function forbiddenLetter(char, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(char)) {
            return false
        }
    }
    return true
}
console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));
console.log(forbiddenLetter("m", []));
// ➞ false
// ➞ true
// ➞ true

// Notes
// All inputs given will be in lowercase.
// You will always be given a forbidden letter, but there may be empty arrays.