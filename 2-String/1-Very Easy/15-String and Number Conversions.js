// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.
function intToString(str) {
    return String(str)
}
function stringToInt(str) {
    return parseInt(str)
}
console.log(intToString(4));
console.log(stringToInt("4"));
console.log(intToString(29348));
// ➞ "4"
// ➞ 4
// ➞ "29348"