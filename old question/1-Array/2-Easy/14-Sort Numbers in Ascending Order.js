// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.
function sortNumsAscending(arr) {
    if (!Array.isArray(arr)) {
        return []
    }
    const one = arr.slice();
    return one.sort((a, b) => a - b)
}
console.log(sortNumsAscending([1, 2, 10, 50, 5]));
console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]));
console.log(sortNumsAscending(null));
console.log(sortNumsAscending([]));
// ➞ [1, 2, 5, 10, 50]
// ➞ [-95, -24, 4, 29, 80, 85]
// ➞ []
// ➞ []