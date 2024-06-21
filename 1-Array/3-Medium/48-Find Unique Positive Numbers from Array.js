// Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.

function uniqueArr(arr) {
    return [...new Set(arr.filter(num => num > 0))];
}
console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]));
console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]));
console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]));
// ➞ [1, 3]
// ➞ [3, 5]
// ➞ [10, 6, 13, 5]