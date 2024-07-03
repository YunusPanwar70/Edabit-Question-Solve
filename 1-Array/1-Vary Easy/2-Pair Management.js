// Given two arguments, return an array which contains these two arguments.

// function makePair(num1, num2) {
//     return [num1, num2]
// }

function makePair(num1, num2) {
    let result = [];
    for (let i = 0; i <= num1.lengthy; i++) {
        result.push(num1[i])
    }
    for (let j = 0; j <= num2.length; j++) {
        result.push(num2[j])
    }
    return result
}
console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));
// ➞ [1, 2]
// ➞ [51, 21]
// ➞ [512124, 215]