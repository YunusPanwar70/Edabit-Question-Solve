// Given an array of integers, replace every number with the mean of all numbers.

// function flattenCurve(arr) {
//     if (arr.length === 0) return []

//     let sum = arr.reduce((acc, val) => acc + val, 0)
//     let mean = sum / arr.length

//     mean = parseFloat(mean.toFixed(1));

//     let result = arr.fill(mean)
//     return result
// }

function flattenCurve(arr) {
    if (arr.length === 0) return []

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let mean = sum / arr.length;
    mean = parseFloat(mean.toFixed(1))

    let result = arr.fill(mean);
    return result
}
console.log(flattenCurve([1, 2, 3, 4, 5]));
console.log(flattenCurve([0, 0, 0, 2, 7, 3]));
console.log(flattenCurve([4]));
console.log(flattenCurve([]));

// ➞ [3, 3, 3, 3, 3]
// ➞ [2, 2, 2, 2, 2, 2]
// ➞ [4]
// ➞ []

// Notes
// Round averages to 1 decimal point.
// Return an empty array if given an empty array (see example #4).