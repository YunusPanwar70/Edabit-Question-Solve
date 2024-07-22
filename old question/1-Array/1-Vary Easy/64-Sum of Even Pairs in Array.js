// function oddSum(arr) {
//     return arr.map((item) => item % 2 ? true : false)
// }
function oddSum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
}
console.log(oddSum([11, 15, 6, 8, 9, 10]));
console.log(oddSum([12, 21, 5, 9, 65, 32]));
console.log(oddSum([1, 2, 3, 4, 5, 6]));
// ➞ [true, false, true, false, false]
// ➞ [false, true, true, true, false]
// ➞ [false, false, false, false, false]