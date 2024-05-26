// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).
function evenOrOdd(arr) {
    let sum = arr.reduce((item, val) => item + val, 0)
    return sum % 2 === 0 ? 'even' : 'odd'
}
console.log(evenOrOdd([0]));
console.log(evenOrOdd([1]));
console.log(evenOrOdd([]));
console.log(evenOrOdd([0, 1, 5]));
// ➞ "even"
// ➞ "odd"
// ➞ "even"
// ➞ "even"