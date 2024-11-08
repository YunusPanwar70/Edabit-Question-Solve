// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// function getMultipliedArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] *= 2
//     }
//     return arr
// }

function getMultipliedArr(arr) {
    return arr.map((num) => num * 2)
}
console.log(getMultipliedArr([2, 5, 3]));
console.log(getMultipliedArr([1, 86, -5]));
console.log(getMultipliedArr([5, 382, 0]));

// ➞ [4, 10, 6]
// ➞ [2, 172, -10]
// ➞ [10, 764, 0]

// Notes
// N/A