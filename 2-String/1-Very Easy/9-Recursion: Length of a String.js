// Write a function that returns the length of a string. Make your function recursive.
// function length(str) {
//     return str.length
// }
function length(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++
    }
    return count
}
console.log(length("apple"));
console.log(length("make"));
console.log(length("a"));
console.log(length(""));
// ➞ 5
// ➞ 4
// ➞ 1
// ➞ 0