// Given an array and an integer n, return the sum of the first n numbers in the array.
// Worked Example
// sliceSum([9, 8, 7, 6], 3) ➞ 24
// The parameter n is specified as 3.
// The first 3 numbers in the list are 9, 8 and 7.
// The sum of these 3 numbers is 24 (9 + 8 + 7).
// Return the answer.
function sliceSum(arr, n) {
    return arr.slice(0, n).reduce((acc, val) => acc + val, 0)
}
console.log(sliceSum([1, 3, 2], 2));
console.log(sliceSum([4, 2, 5, 7], 4));
console.log(sliceSum([3, 6, 2], 0));
// ➞ 4
// ➞ 18
// ➞ 0