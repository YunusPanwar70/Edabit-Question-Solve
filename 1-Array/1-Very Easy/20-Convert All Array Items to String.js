// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// function parseArray(arr) {
//     return arr.toString()
// }

// function parseArray(arr) {
//     return arr.map((item) => String(item))
// }

// function parseArray(arr) {
//     let result = '';
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i]
//     }
//     return result
// }

function parseArray(arr) {
    let result = '';
    let i = 0;
    while (i < arr.length) {
        result += arr[i]
        i++
    }
    return result
}
console.log(parseArray([1, 2, "a", "b"]));
console.log(parseArray(["abc", 123, "def", 456]));
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(parseArray([]));
// ➞ ["1", "2", "a", "b"]
// ➞ ["abc", "123", "def", "456"]
// ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
// ➞ []

// Notes
// Return [] if array is empty.