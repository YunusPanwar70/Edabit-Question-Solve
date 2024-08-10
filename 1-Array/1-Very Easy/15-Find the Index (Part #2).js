// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// function search(arr, n) {
//     return arr.indexOf(n)
// }

// function search(arr, n) {
//     return arr.includes(n) ? arr.indexOf(n) : -1
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

// function search(arr, n) {
//     for (const i in arr) {
//         if (arr[i] === n) {
//             return i
//         }
//     }
//     return -1
// }

function search(arr, n) {
    let index = -1;
    arr.forEach((element, i) => {
        if (element === n && index === -1) {
            index = i;
        }
    });
    return index;
}
console.log(search([1, 2, 3, 4], 3));
console.log(search([2, 4, 6, 8, 10], 8));
console.log(search([1, 3, 5, 7, 9], 11));
// ➞ 2
// ➞ 3
// ➞ -1

// Notes
// If the item is not present, return -1.
// The given array is ordered.