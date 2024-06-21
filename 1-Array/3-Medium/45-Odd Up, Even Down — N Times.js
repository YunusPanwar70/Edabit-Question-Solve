// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

// Adds two (+2) to each odd integer.
// Subtracts two (-2) from each even integer.
function evenOddTransform(arr, num) {
    for (let i = 0; i < num; i++) {
        arr = arr.map((item) => item % 2 === 0 ? item - 2 : item + 2)
    }
    return arr
}
console.log(evenOddTransform([3, 4, 9], 3));
console.log(evenOddTransform([0, 0, 0], 10));
console.log(evenOddTransform([1, 2, 3], 1));
// ➞ [9, -2, 15]
// Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]
// ➞ [-20, -20, -20]
// ➞ [3, 0, 5]/