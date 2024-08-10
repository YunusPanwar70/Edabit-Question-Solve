// Create a function that accepts an array and returns the last item in the array.

// function getLastItem(arr) {
//     return arr.pop()
// }

// function getLastItem(arr) {
//     return arr[arr.length - 1];
// }

function getLastItem(arr) {
    return arr.slice(-1)[0]
}

// function getLastItem(arr) {
//     let result;
//     for (let i = 0; i < arr.length; i++) {
//         result = arr[i]
//     }
//     return result
// }

// function getLastItem(arr) {
//     let result;
//     let i = 0;
//     while (i < arr.length) {
//         result = arr[i]
//         i++
//     }
//     return result
// }
console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));
// ➞ 3
// ➞ "duck"
// ➞ true

// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.