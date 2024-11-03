// Given an array of integers, determine whether the sum of its elements is even or odd.
// The return value should be a string ("odd" or "even").
// If the input array is empty, consider it as an array with a zero ([0]).

// function evenOrOdd(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let sumOfValue = sum += arr[i];
//         if (sumOfValue % 2 === 0) {
//             return 'even'
//         }
//     }
//     return 'odd'
// }

function evenOrOdd(arr) {
    return arr.reduce((acc, cur) => acc + cur)
}
console.log(evenOrOdd([0]));
console.log(evenOrOdd([1]));
console.log(evenOrOdd([]));
console.log(evenOrOdd([0, 1, 5]));
// ➞ "even"
// ➞ "odd"
// ➞ "even"
// ➞ "even"

// Notes
// N/A