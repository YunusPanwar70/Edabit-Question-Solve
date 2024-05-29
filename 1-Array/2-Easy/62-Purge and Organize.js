// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.
function uniqueSort(arr) {
    let shortArr = arr.sort((a, b) => a - b)
    return [...new Set(shortArr)]
}
console.log(uniqueSort([1, 2, 4, 3]));
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));
console.log(uniqueSort([6, 7, 3, 2, 1]));
// ➞ [1, 2, 3, 4]
// ➞ [1, 2, 3, 4]
// ➞ [1, 2, 3, 6, 7]