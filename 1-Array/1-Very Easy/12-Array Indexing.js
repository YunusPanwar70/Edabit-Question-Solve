// Given an index and an array, return the value of the array with the given index.

function valueAt(arr, num) {
    const index = parseInt(num);
    return arr[index];
}

function valueAt(arr, num) {
    const index = Math.floor(num);
    return arr[index];
}
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));
// ➞ 6
// ➞ 5
// ➞ 4

// Notes
// Math.floor() can be helpful.