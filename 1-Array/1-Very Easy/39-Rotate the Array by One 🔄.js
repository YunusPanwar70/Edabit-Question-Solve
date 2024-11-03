// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.

// function rotateByOne(arr) {
//     let lastElement = arr.pop();
//     arr.unshift(lastElement)
//     return arr
// }

function rotateByOne(arr) {
    let lastElement = arr[arr.length - 1]
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = lastElement
    return arr
}
console.log(rotateByOne([1, 2, 3, 4, 5])); // ➞ [5, 1, 2, 3, 4]
console.log(rotateByOne([6, 5, 8, 9, 7])); // ➞ [7, 6, 5, 8, 9]
console.log(rotateByOne([20, 15, 26, 8, 4])); // ➞ [4, 20, 15, 26, 8]
// Notes
// N/A