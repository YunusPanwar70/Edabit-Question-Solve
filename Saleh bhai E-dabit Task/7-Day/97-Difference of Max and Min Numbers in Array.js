function diffMaxMin(arr) {
    let maxNumber = Math.max(...arr);
    let minNumber = Math.min(...arr);
    return maxNumber - minNumber
}
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
console.log(diffMaxMin([44, 32, 86, 19]));
// ➞ 82
// Smallest number is -50, biggest is 32.
// ➞ 67
// Smallest number is 19, biggest is 86.