// Create a function that returns true if the first array is a subset of the second. Return false otherwise.

// function isSubset(arr1, arr2) {
//     return arr1.every((item) => arr2.includes(item))
// }

function isSubset(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            return true
        }
    }
    return false
}
console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]));
console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]));
console.log(isSubset([1, 2], [3, 5, 9, 1]));
// ➞ true
// ➞ true
// ➞ false