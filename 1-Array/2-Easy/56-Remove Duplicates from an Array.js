// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// function removeDups(arr) {
//     return arr.filter((a, b) => arr.indexOf(a) === b);
// }
// function removeDups(arr) {
//     let x = {};
//     arr.forEach(function (i) {
//         if (!x[i]) {
//             x[i] = true
//         }
//     })
//     return Object.keys(x)
// }
// function removeDups(array) {
//     array.splice(0, array.length, ...(new Set(array)))
//     return array
// }
// function removeDups(arr) {
//     let a = [];
//     arr.map(x => {
//         if (!a.includes(x)) {
//             a.push(x)
//         }
//     })
//     return a
// }
function removeDups(arr) {
    return [...new Set(arr)]
}
console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));
// ➞ [1, 0]
// ➞ ["The", "big", "cat"]
// ➞ ["John", "Taylor"]