// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

function stringPairs(str) {
    let one = str.substring(0, 2);
    let two = str.substring(2, 4);
    let three = str.substring(4, 6);
    let four = str.substring(6, 8);
    let five = str.substring(8, 10);
    return [one, two, three, four, five]
}
console.log(stringPairs("mubashir"));
console.log(stringPairs("edabit"));
console.log(stringPairs("airforces"));

// ➞ ["mu", "ba", "sh", "ir"]
// ➞ ["ed", "ab", "it"]
// ➞ ["ai", "rf", "or", "ce", "s*"]

// Notes
// Return [] if the given string is empty.