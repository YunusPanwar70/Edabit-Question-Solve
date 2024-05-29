// Create a function that returns true if a string contains any spaces.
function hasSpaces(str) {
    return str.indexOf(' ') >= 0
}
console.log(hasSpaces("hello"));
console.log(hasSpaces("hello, world"));
console.log(hasSpaces(" "));
console.log(hasSpaces(""));
console.log(hasSpaces(",./!@#"));
// ➞ false
// ➞ true
// ➞ true
// ➞ false
// ➞ false