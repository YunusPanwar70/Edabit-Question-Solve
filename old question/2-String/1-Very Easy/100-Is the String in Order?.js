// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

function isInOrder(str) {
    return str.split('').sort((a, b) => a - b).join('')
}
console.log(isInOrder("abc"));
console.log(isInOrder("edabit"));
console.log(isInOrder("123"));
console.log(isInOrder("xyzz"));
// ➞ true
// ➞ false
// ➞ true
// ➞ true