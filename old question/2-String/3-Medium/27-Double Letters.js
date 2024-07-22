// Create a function that takes a word and returns true if the word has two consecutive identical letters.

// function doubleLetters(word) {
//     for (let i = 0; i < word.length - 1; i++) {
//         if (word[i] === word[i + 1]) {
//             return true
//         }
//     }
//     return false
// }

function doubleLetters(word) {
    let wordSplit = word.split('');
    return wordSplit.some((char, index) => char === wordSplit[index + 1])
}
console.log(doubleLetters("loop"));
console.log(doubleLetters("yummy"));
console.log(doubleLetters("orange"));
console.log(doubleLetters("munchkin"));
// ➞ true
// ➞ true
// ➞ false
// ➞ false