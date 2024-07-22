// Create a function that determines if there is an upward trend.

function upwardTrend(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (typeof arr[i] === "string" || typeof arr[i + 1] === "string") {
            return "Strings not permitted!";
        }
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(upwardTrend([1, 2, 3, 4]));
console.log(upwardTrend([1, 2, 6, 5, 7, 8]));
console.log(upwardTrend([1, 2, 3, "4"]));
console.log(upwardTrend([1, 2, 3, 6, 7]));

// ➞ true
// ➞ false
// ➞ "Strings not permitted!"
// ➞ true

// Notes
// If there is a string element in the array, return "Strings not permitted!".
// The numbers don't have to be consecutive (e.g. [1, 3, 5] should still return true).