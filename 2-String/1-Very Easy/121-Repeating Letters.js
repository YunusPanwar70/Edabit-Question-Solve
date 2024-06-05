// Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
    return str.split('').map(v => v.repeat(2)).join('');
}
console.log(doubleChar("String"));
console.log(doubleChar("Hello World!"));
console.log(doubleChar("1234!_ "));
// ➞ "SSttrriinngg"
// ➞ "HHeelllloo  WWoorrlldd!!"
// ➞ "11223344!!__  "