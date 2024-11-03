// Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.

// To illustrate:

// 11, 15, 6, 8, 9, 10
// 11 + 15 = 26 = true
// 15 + 6 = 21 = false
// 6 + 8 = 14 = true
// 8+ 9 = 17 = false
// 9 + 10 = 19 = false
// Therefore, solution = [true, false, true, false, false]

// function oddSum(arr) {
//     return arr.map((item) => item % 2 === 0 ? true : false)
// }

function oddSum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] % 2 !== 0 ? true : false)
    }
    return result
}
console.log(oddSum([11, 15, 6, 8, 9, 10]));
console.log(oddSum([12, 21, 5, 9, 65, 32]));
console.log(oddSum([1, 2, 3, 4, 5, 6]));
// ➞[true, false, true, false, false]
// ➞[false, true, true, true, false]
// ➞[false, false, false, false, false]

// Notes
// Remember that the length of all the arrays will be an even number, so it is not necessary to measure lengths.