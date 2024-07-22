// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

// function numbersSum(arr) {
//     return arr.reduce((acc, val) => typeof val === 'number' ? acc + val : acc, 0);
// }
function numbersSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i]
        }
    }
    return sum
}
console.log(numbersSum([1, 2, "13", "4", "645"]));
console.log(numbersSum([true, false, "123", "75"]));
console.log(numbersSum([1, 2, 3, 4, 5, true]));
// ➞ 3
// ➞ 0
// ➞ 15