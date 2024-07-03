// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

// function getAbsSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += Math.abs(arr[i])
//     }
//     return sum
// }

function getAbsSum(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i]
        i++
    }
    return Math.abs(sum)
}
console.log(getAbsSum([2, -1, 4, 8, 10]));
console.log(getAbsSum([-3, -4, -10, -2, -3]));
console.log(getAbsSum([2, 4, 6, 8, 10]));
console.log(getAbsSum([-1]));
// ➞ 25
// ➞ 22
// ➞ 30
// ➞ 1