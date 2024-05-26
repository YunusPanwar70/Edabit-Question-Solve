// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
function isAvgWhole(arr) {
    const sum = arr.reduce((acc, val) => acc + val)
    const avg = sum / arr.length;
    return Number.isInteger(avg)
}
console.log(isAvgWhole([1, 3]));
console.log(isAvgWhole([1, 2, 3, 4]));
console.log(isAvgWhole([1, 5, 6]));
console.log(isAvgWhole([1, 1, 1]));
console.log(isAvgWhole([9, 2, 2, 5]));
// ➞ true
// ➞ false
// ➞ true
// ➞ true
// ➞ false