// Given a string of letters, how many capital letters are there?

function capitalLetters(str) {
    let upperCase = (str.match(/[A-Z]/g) || []).length;
    return upperCase;
}
console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc"));
console.log(capitalLetters("JMZWCneOTFLWYwBWxyFw"));
console.log(capitalLetters("mqeytbbjwqemcdrdsyvq"));
// ➞ 6
// ➞ 14
// ➞ 0

// Notes
// N/A