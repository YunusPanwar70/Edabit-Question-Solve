// Write a function that returns the sum of elements greater than 5, in the given array .

// function sumFive(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 5) {
//             sum += arr[i]
//         }
//     }
//     return sum
// }

function sumFive(arr) {
    return arr.reduce((acc, cur) => {
        return cur > 5 ? acc + cur : acc
    }, 0)
}
console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));

// ➞ 77
// ➞ 0
// ➞ 252

// Notes
// Find all the elements greater than 5, not the elements greater than or equal to 5.