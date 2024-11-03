// Create a function that takes an array of numbers arr and returns an inverted array.

// function invertArray(arr) {
//     return arr.map((acc) => -acc)
// }

// function invertArray(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] * -1)
//     }
//     return result
// }

function invertArray(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        result.push(arr[i] * -1)
        i++
    }
    return result
}
console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
console.log(invertArray([]));
// ➞ [-1, -2, -3, -4, -5]
// ➞ [-1, 2, -3, 4, -5]
// ➞ []

// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.