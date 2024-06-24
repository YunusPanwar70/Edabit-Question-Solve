// Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.

// For example:

// [2, 3, 4, 5] ➞ 30
// (2 + 4) * 5 ➞ 30

// [1, 4, 5, 6, 7, 2, 3] ➞ 48
// (1 + 5 + 7 + 3) * 3 ➞ 48

function evenLast(arr) {
    if (arr.length === 0) return 0

    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) {
        sum += arr[i]
    }
    return sum * arr[arr.length - 1]
}
console.log(evenLast([]));
console.log(evenLast([1, 3, 3, 1, 10]));
console.log(evenLast([-11, 3, 3, 1, 10]));
// ➞ 0
// ➞ 140
// ➞ 20