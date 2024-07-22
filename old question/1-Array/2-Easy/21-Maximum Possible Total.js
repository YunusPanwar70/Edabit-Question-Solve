// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

// function maxTotal(arr) {
//     arr.sort((a, b) => b - a);
//     let sum = 0;
//     for (let i = 0; i < 5; i++) {
//         sum += arr[i]
//     }
//     return sum
// }

function maxTotal(arr) {
    let sortArr = arr.sort((a, b) => b - a)
    return sortArr.reduce((acc, val) => acc + val)
}
console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));
console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]));
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// ➞ 43
// ➞ 100
// ➞ 40