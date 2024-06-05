// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// function isLastCharacterN(str) {
//     return str.endsWith('n');
// }

function isLastCharacterN(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'n') {
            return true
        }
    }
    return false
}
console.log(isLastCharacterN("Aiden"));
console.log(isLastCharacterN("Piet"));
console.log(isLastCharacterN("Bert"));
console.log(isLastCharacterN("Dean"));
// ➞ true
// ➞ false
// ➞ false
// ➞ true