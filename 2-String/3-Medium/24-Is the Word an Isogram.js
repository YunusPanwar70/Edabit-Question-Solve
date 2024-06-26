// Is the Word an Isogram?

// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

function isIsogram(str) {
    return str.split('').sort((a, b) => a - b) === 'isogram'
}

console.log(isIsogram("Algorism"));
console.log(isIsogram("PasSword"));
console.log(isIsogram("Consecutive"));
// Outputs :
// ➞true
// ➞false
// ➞false