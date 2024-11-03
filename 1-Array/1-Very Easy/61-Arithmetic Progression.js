// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

// function arithmeticProgression(start, diff, n) {
//     let result = [];
//     for (let i = 0; i <= n; i++) {
//         result.push(start + i * diff)
//     }
//     return result.join(', ')
// }

function arithmeticProgression(start, diff, n) {
    let result = [];
    for (let i = start; i < n; i++) {
        result.push(start)
        start += diff
    }
    return result.join(', ')
}
console.log(arithmeticProgression(1, 2, 5));
console.log(arithmeticProgression(1, 0, 5));
console.log(arithmeticProgression(1, -3, 10));

// ➞ "1, 3, 5, 7, 9"
// ➞ "1, 1, 1, 1, 1"
// ➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"

// Notes
// N/A