// Create a function that takes a word and returns the new word without including the first character.

// function newWord(str) {
//     return str.substring(1)
// }

// function newWord(str) {
//     let sum = '';
//     for (let i = 1; i < str.length; i++) {
//         sum += str[i]
//     }
//     return sum
// }

// function newWord(str) {
//     return str.slice(1)
// }

function newWord(str) {
    return str.charAt(1)
}
console.log(newWord("apple"));
console.log(newWord("cherry"));
console.log(newWord("plum"));
// ➞ "pple"
// ➞ "herry"
// ➞ "lum"