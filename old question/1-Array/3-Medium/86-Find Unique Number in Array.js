// Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

function findSingleNumber(arr) {
    if (arr.length === 0) return null
    return arr.reduce((acc, val) => acc ^ val, 0)
}
console.log(findSingleNumber([2, 2, 2, 3, 4, 4, 4]));
console.log(findSingleNumber([2]));
console.log(findSingleNumber([]));
console.log(findSingleNumber([7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6, 8, 4, 3, 7, 5, 6, 13]));
console.log(findSingleNumber([1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101, 4, 3, 1, 5, 6, 2]));
// ➞ 3
// ➞ 2
// ➞ null
// ➞ 8
// ➞ 101

// Notes
// Don't forget to return the result.
// Be aware this challenge includes two validations:
// Empty input should return null (example #3).
// Single item arrays should return that item (example #2).
// There are always 1 or 0 unique numbers in the input. No two or three+ uniques.
// If you're stuck or your solution is over complicated check the Resources tab.