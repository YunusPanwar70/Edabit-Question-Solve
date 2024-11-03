// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

function countSyllables(str) {
    let regEx = /([a-z]){2}/gi;
    return str.match(regEx).length;
};
console.log(countSyllables("Hehehehehehe"));
console.log(countSyllables("bobobobobobobobo"));
console.log(countSyllables("NANANA"));
// ➞ 6
// ➞ 8
// ➞ 3

// Notes
// For simplicity, please note that each syllable will consist of two letters only.
// Your code should accept strings of any case (upper, lower and mixed case).