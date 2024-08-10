// Create a function that takes an array containing only numbers and return the first element.

// Examples
// function getFirstValue(arr) {
//     return arr[0]
// }

// function getFirstValue(arr) {
//     return arr.shift()
// }

// function getFirstValue(arr) {
//     return arr.slice(0, 1)
// }

// function getFirstValue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         return arr[i];
//     }
// }

function getFirstValue(arr) {
    return arr.splice(0, 1)
}
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));
// ➞ 1
// ➞ 80
// ➞ -500