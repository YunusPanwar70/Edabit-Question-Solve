// Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.

// A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

// function isScalable(arr) {
//     return arr.every((item, index) => {
//         if (index === arr.length - 1) return true;
//         return Math.abs(item - arr[index + 1]) <= 5;
//     })
// }

function isScalable(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) > 5) {
            return false;
        }
    }
    return true;
}
console.log(isScalable([1, 2, 4, 6, 7, 8]));
console.log(isScalable([40, 45, 50, 45, 47, 52]));
console.log(isScalable([2, 9, 11, 10, 18, 21]));
// ➞ true
// ➞ true
// ➞ false