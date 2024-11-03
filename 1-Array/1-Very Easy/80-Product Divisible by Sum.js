// Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

// function divisible(arr) {
//     let sum = arr.reduce((acc, val) => acc + val);
//     let total = arr.reduce((acc, val) => acc % val)
//     return sum % total === 0
// }

// function divisible(arr) {
//     let sum = 1;
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum *= arr[i]
//         total += arr[i]
//     }
//     return sum % total === 0
// }

function divisible(arr) {
    let sum = 1;
    let total = 0;
    let i = 0;
    while (i < arr.length) {
        sum *= arr[i]
        total += arr[i]
        i++
    }
    return sum % total === 0
}
console.log(divisible([3, 2, 4, 2]));
console.log(divisible([4, 2, 6]));
console.log(divisible([3, 5, 1]));

// ➞ false
// ➞ true
// 4 * 2 * 6 / (4 + 2 + 6)
// ➞ false

// Notes
// N/A