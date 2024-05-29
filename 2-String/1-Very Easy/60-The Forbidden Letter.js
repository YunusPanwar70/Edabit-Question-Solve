// Given a letter and an array of words, return whether the letter does not appear in any of the words.
// function forbiddenLetter(char, str) {
//     return str.every((word) => !word.includes(char))
// }
function forbiddenLetter(char, str) {
    return !str.some((word) => word.includes(char))
}
console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));
console.log(forbiddenLetter("m", []));
// ➞ false
// ➞ true
// ➞ true