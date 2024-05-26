// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
    const minimum = Math.min(...arr);
    const maximum = Math.max(...arr);
    return [minimum, maximum];
}
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));
// ➞ [1, 5]
// ➞ [5, 2334454]
// ➞ [1, 1]