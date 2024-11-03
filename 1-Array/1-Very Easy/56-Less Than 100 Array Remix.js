// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

// function arrayLessThan100(arr) {
//     return arr.reduce((acc, cur) => acc + cur) < 100
// }

function arrayLessThan100(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum < 100
}
console.log(arrayLessThan100([5, 57]));
console.log(arrayLessThan100([77, 30]));
console.log(arrayLessThan100([0]));

// ➞ true
// ➞ false
// ➞ true

// Notes
// N/A