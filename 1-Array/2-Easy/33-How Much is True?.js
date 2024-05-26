// Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
    return arr.filter((item) => item === true)
}
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
// ➞ 2
// ➞ 0
// ➞ 0