// Create a function that takes two arrays and insert the second array in the middle of the first array.
// function tuckIn(arr1, arr2) {
//     return [...arr1, ...arr2]
// }
function tuckIn(arr1, arr2) {
    return arr1.concat(arr2)
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15, 150], [45, 75, 35]));
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));
// ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ➞ [15, 45, 75, 35, 150]
// ➞ [[1, 2], [3, 4], [5, 6]]