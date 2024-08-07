// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// function sumArray(arr) {
//     return arr.reduce((acc, val) => acc + val)
// }
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([0, 4, 8, 12]));
// ➞ 15
// ➞ 0
// ➞ 24