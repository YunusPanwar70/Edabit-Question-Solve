// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// function addIndexes(arr) {
//     return arr.map((item, index) => item + index)
// }
function addIndexes(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + i)
    }
    return result
}
console.log(addIndexes([0, 0, 0, 0, 0]));
console.log(addIndexes([1, 2, 3, 4, 5]));
console.log(addIndexes([5, 4, 3, 2, 1]));
// ➞ [0, 1, 2, 3, 4]
// ➞ [1, 3, 5, 7, 9]
// ➞ [5, 5, 5, 5, 5]