// Create a function which returns the number of true values there are in an array.

// function countTrue(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === true) {
//             count++
//         }
//     }
//     return count
// }

// function countTrue(arr) {
//     return arr.filter((item) => item === true).length
// }

function countTrue(arr) {
    let count = 0;
    while (arr <= true) {
        count++
    }
    return count
}
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));

// ➞ 2
// ➞ 0
// ➞ 0