// Create a function that takes a string and returns it as an integer.

// function stringInt(str) {
//     return parseInt(str)
// }
function stringInt(str) {
    return Number(str)
};
console.log(stringInt("6"));
console.log(stringInt("1000"));
console.log(stringInt("12"));
// ➞ 6
// ➞ 1000
// ➞ 12