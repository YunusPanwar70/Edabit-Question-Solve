// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.

function toArray(arr) {
    return arr.toString().split('').map(Number)
}
function toNumber(num) {
    return parseInt(num.join(''), 10)
}
console.log(toArray(235));
console.log(toArray(0));
console.log(toNumber([2, 3, 5]));
console.log(toNumber([0]));
// ➞[2, 3, 5]
// ➞[0]
// ➞ 235
// ➞ 0