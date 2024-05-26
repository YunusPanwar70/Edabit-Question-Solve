// Create a function that takes an array and returns the sum of all numbers in the array.
// function getSumOfItems(arr) {
//     return arr.reduce((item, val) => item + val)
// }
function getSumOfItems(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(getSumOfItems([2, 7, 4]));
console.log(getSumOfItems([45, 3, 0]));
console.log(getSumOfItems([-2, 84, 23]));
// ➞ 13
// ➞ 48
// ➞ 105