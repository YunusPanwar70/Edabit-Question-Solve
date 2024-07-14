// You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.

// Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.

// function magnitude(arr) {
//     const squared = arr.map((item) => item * item)
//     const sumOfSquare = squared.reduce((acc, val) => acc + val, 0)
//     return Math.sqrt(sumOfSquare)
// }

function magnitude(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i]
    }
    return Math.sqrt(sum)
}
console.log(magnitude([3, 4]));
console.log(magnitude([0, 0, -10]));
console.log(magnitude([]));
console.log(magnitude([2, 3, 6, 1, 8]));
// ➞ 5
// ➞ 10
// ➞ 0
// ➞ 10.677078252031311


// The array can have any length.
// The input array will contain integers (except for empty array [] ➞ 0).
// Use both .map() and .reduce().
// Don't use Math.hypot().