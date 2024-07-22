// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.
// [1, 3, 3, 5, 5, 5]
// original array
// [1, 3, 5]
// original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.

// function sets(arr) {
//     const uniqueArray = [...new Set(arr)];
//     return uniqueArray
// };

function sets(arr) {
    const uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index);
    return uniqueArray
}
console.log(sets([1, 3, 3, 5, 5]));
console.log(sets([4, 4, 4, 4]));
console.log(sets([5, 7, 8, 9, 10, 15]));
console.log(sets([3, 3, 3, 2, 1]));
// ➞ [1, 3, 5]
// ➞ [4]
// ➞ [5, 7, 8, 9, 10, 15]
// ➞ [1, 2, 3]