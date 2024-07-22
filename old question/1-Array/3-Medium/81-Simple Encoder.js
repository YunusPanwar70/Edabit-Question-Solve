// Create a function that takes a string str and performs simple encoding as per the following method:

// Replace all single occurrence characters with [
// Replace all characters with two or more occurrences with ]
// Return the final string after modification.

function simpleEncoder(str) {

}
console.log(simpleEncoder("Mubashir"));
console.log(simpleEncoder("Matt"));
console.log(simpleEncoder("eD  aBiT"));
// ➞ "[[[[[[[["
// '[' for each character
// ➞ "[[]]"
// ']' for both 't'
// ➞ "[[]][[[["
// Two spaces in between

// Notes
// Strings can contain lower and uppercase letters. Treat them equally (i.e. A = a, B = b).
// Spaces are also characters.