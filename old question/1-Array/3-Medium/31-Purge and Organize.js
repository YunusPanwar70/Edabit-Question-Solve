// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.
// function uniqueSort(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         const currentElement = arr[i]
//         if (result.indexOf(currentElement) === -1) {
//             result.push(currentElement)
//         }
//     }
//     return result.sort((a, b) => a - b)
// }
function uniqueSort(arr) {
    return Array.from(new Set(arr));
}
console.log(uniqueSort([1, 2, 4, 3]));
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));
console.log(uniqueSort([6, 7, 3, 2, 1]));
// ➞ [1, 2, 3, 4]
// ➞ [1, 2, 3, 4]
// ➞ [1, 2, 3, 6, 7]