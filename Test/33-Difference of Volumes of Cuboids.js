// function findDifference(arr1, arr2) {
//     const value1 = arr1.reduce((item, acc) => item * acc, 1)
//     const value2 = arr2.reduce((item, acc) => item * acc, 1)
//     return Math.abs(value1 - value2)
// }
function findDifference(arr1, arr2) {
    let one = 1;
    let two = 1;
    for (let i = 0; i < arr1.length; i++) {
        one *= arr1[i]
        two *= arr2[i]
    }
    return Math.abs(one - two)
}
console.log(findDifference([28, 16, 29], [7, 8, 17]));
console.log(findDifference([9, 22, 18], [16, 24, 10]));
console.log(findDifference([1, 9, 25], [10, 7, 9]));
console.log(findDifference([7, 6, 16], [26, 9, 26]));
// ➞ 12040
// ➞ 276
// ➞ 405
// ➞ 5412