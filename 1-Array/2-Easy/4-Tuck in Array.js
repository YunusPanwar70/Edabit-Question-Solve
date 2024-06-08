// Create a function that takes two arrays and insert the second array in the middle of the first array.
// function tuckIn(arr1, arr2) {
//     return [...arr1, ...arr2]
// }
// function tuckIn(arr1, arr2) {
//     return arr1.concat(arr2)
// }
function tuckIn(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i])
    }
    for (let j = 0; j < arr2.length; j++) {
        result.push(arr2[j])
    }
    return result
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15, 150], [45, 75, 35]));
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));
// ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ➞ [15, 45, 75, 35, 150]
// ➞ [[1, 2], [3, 4], [5, 6]]