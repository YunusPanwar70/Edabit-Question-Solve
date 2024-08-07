// // Create a function that takes three parameters where:
// x is the start of the range(inclusive).
// y is the end of the range(inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n.Return an empty array if there are no numbers that are divisible by n.

function arrayOperation(x, y, n) {
    let result = [];
    for (let i = x; i <= y; i++) {
        if (i % n === 0) {
            result.push(i)
        }
    }
    return result
}
console.log(arrayOperation(1, 10, 3));
console.log(arrayOperation(7, 9, 2));
console.log(arrayOperation(15, 20, 7));
// ➞ [3, 6, 9]
// ➞ [8]
// ➞ []