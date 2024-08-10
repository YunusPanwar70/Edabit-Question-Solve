// Create a function that finds the index of a given item.

// function search(arr, n) {
//     return arr.indexOf(n)
// }

// function search(arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             return i
//         }
//     }
//     return -1
// }

// function search(arr, n) {
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[i] === n) {
//             return i
//         }
//         i++
//     }
//     return -1
// }

console.log(search([1, 5, 3], 5));
console.log(search([9, 8, 3], 3));
console.log(search([1, 2, 3], 4));

// ➞ 1
// ➞ 2
// ➞ -1

// Notes
// If the item is not present, return -1.