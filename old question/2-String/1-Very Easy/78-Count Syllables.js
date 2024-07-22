// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

// function numberSyllables(str) {
//     let result = 1;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "-") {
//             result++
//         }
//     }
//     return result
// }

function numberSyllables(str) {
    let result = 1;
    let i = 0;
    while (i < str.length) {
        if (str[i] === '-') {
            result++
        }
        i++
    }
    return result
}
console.log(numberSyllables("buf-fet"));
console.log(numberSyllables("beau-ti-ful"));
console.log(numberSyllables("mon-u-men-tal"));
console.log(numberSyllables("on-o-mat-o-poe-ia"));
// ➞ 2
// ➞ 3
// ➞ 4
// ➞ 6