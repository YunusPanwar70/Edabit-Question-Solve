// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

function checkEnding(str, char) {
    return str.endsWith(char)
}
console.log(checkEnding("abc", "bc"));
console.log(checkEnding("abc", "d"));
console.log(checkEnding("samurai", "zi"));
console.log(checkEnding("feminine", "nine"));
console.log(checkEnding("convention", "tio"));
// ➞ true
// ➞ false
// ➞ false
// ➞ true
// ➞ false