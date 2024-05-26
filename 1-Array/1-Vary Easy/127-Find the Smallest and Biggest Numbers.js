// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minimum(arr) {
    let one = Math.min(...arr);
    let two = Math.max(...arr);
    return [one, two];
}
console.log(minimum([1, 2, 3, 4, 5]));
console.log(minimum([2334454, 5]));
console.log(minimum([1]));
// ➞ [1, 5]
// ➞ [5, 2334454]
// ➞ [1, 1]