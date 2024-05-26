// Write a function that finds the sum of an array. Make your function recursive.
// function sum(arr) {
//     return arr.reduce((acc, val) => acc + val);
// }
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result
}
console.log(sum([1, 2, 3, 4]));
console.log(sum([1, 2]));
console.log(sum([1]));
console.log(sum([]));
// ➞ 10
// ➞ 3
// ➞ 1
// ➞ 0