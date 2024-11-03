// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

// function sumMinimums(arr) {
//     let a = arr[0][0];
//     let b = arr[1][0];
//     let c = arr[2][0];
//     return a + b + c
// }

// function sumMinimums(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let min = Math.min(...arr[i]);
//         sum += min
//     }
//     return sum
// }

function sumMinimums(arr) {
    const minValues = arr.map(row => Math.min(...row));
    const sum = minValues.reduce((acc, cur) => acc + cur, 0);
    return sum;
}
console.log(sumMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
]));

// ➞ 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20

// Notes
// N/A