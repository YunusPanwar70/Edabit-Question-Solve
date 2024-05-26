// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// function drop(arr,num) {
//     return arr.slice(num)
// }
// function drop(arr,num) {
//     return arr.splice(num)
// }
// function drop(arr, num) {
//     let result = [];
//     for (let i = num; i < arr.length; i++) {
//         result.push(arr[i])
//     }
//     return result
// }
function drop(arr, num) {
    let result = [];
    let i = num;
    while (i < arr.length) {
        result.push(arr[i])
        i++
    }
    return result
}
console.log(drop([1, 2, 3], 1));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0));
// ➞ [2, 3]
// ➞ [3]
// ➞ []
// ➞ [1, 2, 3]