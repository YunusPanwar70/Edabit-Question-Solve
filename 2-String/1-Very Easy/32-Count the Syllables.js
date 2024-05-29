// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

function countSyllables(str) {
    const lengthStr = str.toLowerCase().length;
    return lengthStr / 2
}
console.log(countSyllables("Hehehehehehe"));
console.log(countSyllables("bobobobobobobobo"));
console.log(countSyllables("NANANA"));
// ➞ 6
// ➞ 8
// ➞ 3