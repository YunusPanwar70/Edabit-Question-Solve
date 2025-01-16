// Write a regular expression that matches a string if it contains at least one digit.

function containsDigit(str) {
    return /\d/.test(str);
}
console.log(containsDigit("c8"));
console.log(containsDigit("23cc4"));
console.log(containsDigit("abwekz"));
console.log(containsDigit("sdfkxi"));
// ➞ true
// ➞ true
// ➞ false
// ➞ false

// Notes
// This challenge is designed to use RegEx only.