// Create a function that returns the ASCII value of the passed in character.

function ctoa(str) {
    return str.charCodeAt(0)
}
console.log(ctoa("A"));
console.log(ctoa("m"));
console.log(ctoa("["));
console.log(ctoa("\\"));
// ➞ 65
// ➞ 109
// ➞ 91
// ➞ 92