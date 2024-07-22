// Create a function that takes an array of integers and returns true if every number is prime. Otherwise, return false.

function allPrime(arr) {
    return arr.some((acc, val) => acc % val === 0)
}
console.log(allPrime([7, 5, 2, 4, 6]));
console.log(allPrime([2, 3, 5, 7, 13, 17, 19, 23, 29]));
console.log(allPrime([1, 5, 3]));
// ➞ false
// ➞ true
// ➞ false

// Notes
// 1 is not a prime number.