// Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

function reverseCapitalize(str) {
    let a = str.split('').reverse().join('')
    let b = a.toUpperCase()
    return b
}
console.log(reverseCapitalize("abc"));
console.log(reverseCapitalize("hellothere"));
console.log(reverseCapitalize("input"));
// ➞ "CBA"
// ➞ "EREHTOLLEH"
// ➞ "TUPNI"