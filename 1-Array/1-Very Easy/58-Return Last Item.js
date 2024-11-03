// Create a function that returns the last value of the last item in an array or string.

// function lastItem(arr) {
//     return arr.slice(-1)[0];
// }

function lastItem(arr) {
    let lastElement;
    for (let i = 0; i < arr.length; i++) {
        lastElement = arr[i]; 
    }
    return lastElement;
}
console.log(lastItem([0, 4, 19, 34, 50, -9, 2]));
console.log(lastItem("The quick brown fox jumped over the lazy dog"));
console.log(lastItem([]));
// ➞ 2
// ➞ "g"
// ➞ undefined

// Notes
// Arrays/strings will be of varying size.
// Return undefined if array/string is empty.