// Create a function that takes an array of numbers arr and returns an inverted array.

// function invertArray(arr) {
//     return arr.map((item) => item * -1)
// }
function invertArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= -1
    }
    return arr
}
console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
console.log(invertArray([]));
// ➞ [-1, -2, -3, -4, -5]
// ➞ [-1, 2, -3, 4, -5]
// ➞ []