// Create a function that filters out an array to include numbers that only have a certain number of digits.

function filterDigitLength(arr, n) {
    return arr.filter((item) => item.toString().length === n)
}
console.log(filterDigitLength([88, 232, 4, 9721, 555], 3));
console.log(filterDigitLength([2, 7, 8, 9, 1012], 1));
console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1));
console.log(filterDigitLength([5, 6, 8, 9], 1));
// ➞ [232, 555]
// Include only numbers with 3 digits.
// ➞ [2, 7, 8, 9]
// Include only numbers with 1 digit.
// ➞ []
// No numbers with only 1 digit exist => return empty array.
// ➞ [5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array.
