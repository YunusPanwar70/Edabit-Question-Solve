// Create a function that returns the indices of all occurrences of an item in the array.

function getIndices(arr, el) {
    return arr.reduce((acc, item, index) => {
        if (item === el) {
            acc.push(index)
        }
    }, [])
}

// function getIndices(arr, el) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === el) {
//             result.push(i)
//         }
//     }
//     return result
// }

console.log(getIndices(["a", "a", "b", "a", "b", "a"], "a"));
console.log(getIndices([1, 5, 5, 2, 7], 7));
console.log(getIndices([1, 5, 5, 2, 7], 5));
console.log(getIndices([1, 5, 5, 2, 7], 8));
// ➞ [0, 1, 3, 5]
// ➞ [4]
// ➞ [1, 2]
// ➞ []

// Notes
// If an element does not exist in an array, return [].
// Arrays are zero-indexed.
// Values in the array will be value-types (don't need to worry about nested arrays).