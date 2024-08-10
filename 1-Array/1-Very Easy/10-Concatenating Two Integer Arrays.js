// Create a function to concatenate two integer arrays.

// function concat(arr1, arr2) {
//     return arr1.concat(arr2)
// }

function concat(...arr) {
    return arr.reduce((acc, cur) => acc.concat(cur), [])
}

// function concat(...arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             result.push(arr[i][j])
//         }
//     }
//     return result
// }
console.log(concat([1, 3, 5], [2, 6, 8]));
console.log(concat([7, 8], [10, 9, 1, 1, 2]));
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));
// ➞ [1, 3, 5, 2, 6, 8]
// ➞ [7, 8, 10, 9, 1, 1, 2]
// ➞ [4, 5, 1, 3, 3, 3, 3, 3]

// Notes
// Don't forget to return the result.
// See Resources tab for more info.