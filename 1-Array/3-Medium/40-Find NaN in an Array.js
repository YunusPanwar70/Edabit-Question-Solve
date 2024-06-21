// Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

// function findNaN(arr) {
//     return arr.findIndex(Number.isNaN)
// }
function findNaN(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Number.isNaN(arr[i])) {
            return i
        }
    }
    return -1
}
console.log(findNaN([1, 2, NaN]));
console.log(findNaN([NaN, 1, 2, 3, 4]));
console.log(findNaN([0, 1, 2, 3, 4]));
// ➞ 2
// ➞ 0
// ➞ -1