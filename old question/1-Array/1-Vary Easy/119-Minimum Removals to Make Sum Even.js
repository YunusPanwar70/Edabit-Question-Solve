// Create a function that returns the minimum number of removals to make the sum of all elements in an array even.

// function minimumRemovals(arr) {
//     const sum = arr.reduce((acc, val) => acc + val)
//     if (sum % 2 === 0) {
//         return 0
//     } else {
//         return 1
//     }
// }

// function minimumRemovals(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     if (result % 2 === 0) {
//         return 0
//     } else {
//         return 1
//     }
// }

function minimumRemovals(arr) {
    let count = 0;
    let i = 0;
    while (i < arr.length) {
        count += arr[i]
        i++
    }
    if (count % 2 === 0) {
        return 0
    } else {
        return 1
    }
}
console.log(minimumRemovals([1, 2, 3, 4, 5]));
console.log(minimumRemovals([5, 7, 9, 11]));
console.log(minimumRemovals([5, 7, 9, 12]));
// ➞ 1
// ➞ 0
// ➞ 1