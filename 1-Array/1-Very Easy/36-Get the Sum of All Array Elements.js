// Create a function that takes an array and returns the sum of all numbers in the array.

// function getSumOfItems(arr) {
//     return arr.reduce((acc, cur) => acc + cur);
// }

// function getSumOfItems(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }

// function getSumOfItems(arr) {
//     let sum = 0;
//     let i = 0;
//     while (i < arr.length) {
//         sum += arr[i]
//         i++
//     }
//     return sum
// }

// function getSumOfItems(arr) {
//     let sum = 0;
//     for (const i in arr) {
//         sum += arr[i]
//     }
//     return sum
// }

// function getSumOfItems(arr) {
//     let sum = 0;
//     for (const i of arr) {
//         sum += i
//     }
//     return sum
// }

function getSumOfItems(arr) {
    let sum = 0;
    arr.forEach(e => {
        sum += e
    });
    return sum
}
console.log(getSumOfItems([2, 7, 4]));
console.log(getSumOfItems([45, 3, 0]));
console.log(getSumOfItems([-2, 84, 23]));
// ➞ 13
// ➞ 48
// ➞ 105

// Notes
// N/A