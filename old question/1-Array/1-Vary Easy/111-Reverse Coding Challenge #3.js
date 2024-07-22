// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

// function reverseCoding(arr, num) {
//     return arr.map((item) => item % num)
// }
function reverseCoding(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] % n)
    }
    return result
}
console.log(reverseCoding[5, 7, 8, 2, 1], 2);
console.log(reverseCoding[9, 8, 16, 47], 4);
console.log(reverseCoding[17, 11, 99, 55, 23, 1], 5);
console.log(reverseCoding[6, 1], 7);
console.log(reverseCoding[3, 2, 9], 3);
console.log(reverseCoding[48, 22, 0, 19, 33, 100], 10);
// ➞ [1, 1, 0, 0, 1]
// ➞ [1, 0, 0, 3]
// ➞ [2, 1, 4, 0, 3, 1]
// ➞ [6, 1]
// ➞ [0, 2, 0]
// ➞ [8, 2, 0, 9, 3, 0]