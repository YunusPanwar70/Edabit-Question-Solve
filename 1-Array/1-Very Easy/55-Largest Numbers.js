// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

// function largestNumbers(n, arr) {
//     let sortVal = arr.sort((a, b) => a - b)
//     let sliceVal = sortVal.slice(n)
//     return sliceVal
// }

function largestNumbers(n, arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    for (let i = n; i < arr.length; i++) {
        if (n > 0) {
            result.push(arr[i])
        } 
    }
    return result
}
console.log(largestNumbers(2, [4, 3, 2, 1]));
console.log(largestNumbers(1, [7, 19, 4, 2]));
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16]));
console.log(largestNumbers(0, [1, 3, 4, 2]));
// ➞ [3, 4]
// ➞ [19]
// ➞ [16, 18, 57]
// ➞ []

// Notes
// The returned array must be sorted in ascending order.