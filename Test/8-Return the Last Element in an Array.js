// Create a function that accepts an array and returns the last item in the array.

// function getLastItem(arr) {
//     return arr[2]
// }
// function getLastItem(arr) {
//     return arr.pop()
// }
// function getLastItem(arr) {
//     return arr[arr.length - 1];
// }
function getLastItem(arr) {
    return arr.slice(-1)[0]
}
console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));
// ➞ 3
// ➞ "duck"
// ➞ true