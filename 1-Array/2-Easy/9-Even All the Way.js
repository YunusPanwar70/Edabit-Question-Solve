// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.
function getOnlyEvens(arr) {
    return arr.filter((item, index) => item % 2 === 0 && index % 2 === 0)
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));
console.log(getOnlyEvens([1, 2, 3, 4, 5]));
// ➞ [2, 4]
// ➞ [0, 2, 4]
// ➞ []