// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

function sumTwoSmallestNums(arr) {
    const filterArr = arr.filter((num) => num > 0)
    const ShortArr = filterArr.sort((a, b) => a - b)
    return ShortArr[0] + ShortArr[1]
}
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));
console.log(sumTwoSmallestNums([2, 9, 6, -1]));
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]));
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]));
// ➞ 7
// ➞ 3453455
// ➞ 8
// ➞ 563
// ➞ 4519