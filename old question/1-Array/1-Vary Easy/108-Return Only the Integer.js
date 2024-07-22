// Write a function that takes an array of elements and returns only the integers.

function returnOnlyInteger(arr) {
    return arr.filter((item) => Number.isInteger(item))
}
console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16]));
console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]));
console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]));
console.log(returnOnlyInteger(["String", true, 3.3, 1]));
// ➞ [9, 2, 16]
// ➞ [81, 123]
// ➞ [10, 56, 20, 3]
// ➞ [1]