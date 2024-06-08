// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

function trimmedAverages(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let max = Math.max(...arr)
        let min = Math.min(...arr)
        if (arr[i] !== max && arr[i] !== max) {
            sum += arr[i]
            count++
        }
    }
    let average = Math.round(sum / count)
    if (average === NaN) {
        return 1
    }
    else { return average }
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