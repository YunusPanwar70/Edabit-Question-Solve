// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

// Return a boolean value (true or false).
// Return true if the amount of x's and o's are the same.
// Return false if they aren't the same amount.
// The string can contain any character.
// When "x" and "o" are not in the string, return true.
function XO(str) {
    const lowerStr = str.toLowerCase()
    const xCount = lowerStr.split('').filter(char => char === 'x').length;
    const oCount = lowerStr.split('').filter(char => char === 'o').length;
    return xCount === oCount
}
console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
// ➞ true
// ➞ false
// ➞ true
// Case insensitive.
// ➞ true
// Returns true if no x and o.
// ➞ false