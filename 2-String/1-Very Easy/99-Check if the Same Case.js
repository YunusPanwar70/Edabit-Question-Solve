// Create a function that returns true if an input string contains only uppercase or only lowercase letters.

function sameCase(str) {
    return str === str.toUpperCase() || str === str.toLowerCase();
}
console.log(sameCase("hello"));
console.log(sameCase("HELLO"));
console.log(sameCase("Hello"));
console.log(sameCase("ketcHUp"));
// ➞ true
// ➞ true
// ➞ false
// ➞ false