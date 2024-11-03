// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// function findDifference(arr1, arr2) {
//     let a = arr1.reduce((a, b) => a * b);
//     let b = arr2.reduce((a, b) => a * b);
//     return Math.abs(a - b)
// }

// function findDifference(arr1, arr2) {
//     let a = 1;
//     let b = 1;
//     for (let i = 0; i < arr1.length; i++) {
//         a *= arr1[i]
//         b *= arr2[i]
//     }
//     return Math.abs(a - b)
// }

function findDifference(arr1, arr2) {
    let a = 1;
    let b = 1;
    let i = 0;
    while (i < arr1.length) {
        a *= arr1[i]
        b *= arr2[i]
        i++
    }
    return Math.abs(a - b)
}
console.log(findDifference([28, 16, 29], [7, 8, 17]));    // ➞ 12040
console.log(findDifference([9, 22, 18], [16, 24, 10]));   // ➞ 276
console.log(findDifference([1, 9, 25], [10, 7, 9]));      // ➞ 405
console.log(findDifference([7, 6, 16], [26, 9, 26]));     // ➞ 5412

// Notes
// Each array element is greater than 0.