// function negate(arr) {
//     return arr.map((item) => item * -1);
// }

// function negate(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] * -1)
//     }
//     return result
// }

function negate(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        result.push(arr[i] * -1)
        i++;
    }
    return result
}
console.log(negate([1, 2, 3, 4]));
console.log(negate([-1, 2, -3, 4]));
console.log(negate([]));
// ➞ [-1, -2, -3, -4]
// ➞ [1, -2, 3, -4]
// ➞ []