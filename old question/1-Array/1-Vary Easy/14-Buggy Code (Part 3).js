// function sumArray(arr) {
//     return arr.reduce((item, acc) => item + acc);
// }

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }

function sumArray(arr) {
    let count = 0;
    let i = 0;
    while (i < arr.length) {
        count += arr[i]
        i++
    }
    return count
}
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([0, 4, 8, 12]));
// ➞ 15
// ➞ 0
// ➞ 24