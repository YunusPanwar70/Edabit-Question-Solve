// Given a string of numbers separated by a comma and space, return the product of the numbers.

function multiplyNums(str) {
    return str.split(', ').map(Number).reduce((acc, curr) => acc * curr, 1)
}
console.log(multiplyNums("2, 3"));
console.log(multiplyNums("1, 2, 3, 4"));
console.log(multiplyNums("54, 75, 453, 0"));
console.log(multiplyNums("10, -2"));
// ➞ 6
// ➞ 24
// ➞ 0
// ➞ -20