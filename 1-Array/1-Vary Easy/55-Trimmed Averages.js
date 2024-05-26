// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

function trimmedAverages(arr) {
    let sorted = arr.sort((a, b) => b - a)
    let sliceArr = sorted.slice(0, 1, 3);
    return sliceArr
}
console.log(trimmedAverages([4, 5, 7, 100]));
console.log(trimmedAverages([10, 25, 5, 15, 20]));
console.log(trimmedAverages([1, 1, 1]));
// ➞ 6
// ➞ 15
// ➞ 1
// Average of 5 and 7
// Average of 10, 15 and 20
// 1