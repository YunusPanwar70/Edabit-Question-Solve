// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

function isLastCharacterN(str) {
    let regex = /n/g;
    return regex.test(str);
}
console.log(isLastCharacterN("Aiden"));
console.log(isLastCharacterN("Piet"));
console.log(isLastCharacterN("Bert"));
console.log(isLastCharacterN("Dean"));
// ➞ true
// ➞ false
// ➞ false
// ➞ true

// Notes
// The function must return a boolean value ( i.e. true or false).