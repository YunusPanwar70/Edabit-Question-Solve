// A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

function getWord(first, last) {
    let concatValue = first + last;
    return concatValue.toUpperCase()[0] + concatValue.slice(1)
}
console.log(getWord("seas", "onal"));
console.log(getWord("comp", "lete"));
console.log(getWord("lang", "uage"));
// ➞ "Seasonal"
// ➞ "Complete"
// ➞ "Language"