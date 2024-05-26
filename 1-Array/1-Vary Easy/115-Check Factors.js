// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

function checkFactors(arr, num) {
    return arr.every(item => num % item === 0);
}
console.log(checkFactors([2, 3, 4], 12));
console.log(checkFactors([1, 2, 3, 8], 12));
console.log(checkFactors([1, 2, 50], 100));
console.log(checkFactors([3, 6], 9));
// ➞ true
// Since 2, 3, and 4 are all factors of 12.
// ➞ false
// 8 is not a factor of 12.
// ➞ true
// ➞ false