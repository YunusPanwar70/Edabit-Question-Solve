// Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.

// A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

function isScalable(arr) {
    return arr.every((item) => item > 5)
}
console.log(isScalable([1, 2, 4, 6, 7, 8]));
console.log(isScalable([40, 45, 50, 45, 47, 52]));
console.log(isScalable([2, 9, 11, 10, 18, 21]));
// ➞ true
// ➞ true
// ➞ false