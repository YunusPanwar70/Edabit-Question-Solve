// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// function drop(arr, n) {
//     return arr.slice(n)
// }

// function drop(arr, n) {
//     return arr.splice(n)
// }

// function drop(arr, n) {
//     return arr.filter((_, index) => index >= n)
// }

// function drop(arr, n) {
//     let result = [];
//     for (let i = n; i < arr.length; i++) {
//         result.push(arr[i])
//     }
//     return result
// }

function drop(arr, n) {
    let result = [];
    let i = n;
    while (i < arr.length) {
        result.push(arr[i])
        i++
    }
    return result
}
console.log(drop([1, 2, 3], 1));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0));
// ➞ [2, 3]
// ➞ [3]
// ➞ []
// ➞ [1, 2, 3]

// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.