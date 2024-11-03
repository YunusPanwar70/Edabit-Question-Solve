// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

// function trimmedAverages(arr) {
//     arr.sort((a, b) => a - b);
//     const trimmedArray = arr.slice(1, -1);
//     const sum = trimmedArray.reduce((acc, cur) => acc + cur, 0);
//     const average = sum / trimmedArray.length;
//     return Math.round(average);
// }

function trimmedAverages(arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        sum += arr[i]
    }
    return sum / (arr.length - 2)
}
console.log(trimmedAverages([4, 5, 7, 100]));
console.log(trimmedAverages([10, 25, 5, 15, 20]));
console.log(trimmedAverages([1, 1, 1]));
// Average of 5 and 7
// Average of 10, 15 and 20
// 1

// ➞ 6
// ➞ 15
// ➞ 1

// Notes
// Round to the nearest whole number.
// Array size is greater than 2.