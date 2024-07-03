// function getDiscounts(arr, n) {
//     const percentage = parseInt(n) / 100;
//     return arr.map((item) => item * percentage)
// }

// function getDiscounts(arr, n) {
//     let percentage = parseInt(n) / 100;
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] * percentage)
//     }
//     return result
// }

function getDiscounts(arr, n) {
    let percentage = parseInt(n) / 100;
    let result = [];
    let i = 0;
    while (i < arr.length) {
        result.push(arr[i] * percentage)
        i++
    }
    return result
}
console.log(getDiscounts([2, 4, 6, 11], "50%"));
console.log(getDiscounts([10, 20, 40, 80], "75%"));
console.log(getDiscounts([100], "45%"));
// ➞ [1, 2, 3, 5.5]
// ➞ [7.5, 15, 30, 60]
// ➞ [45]