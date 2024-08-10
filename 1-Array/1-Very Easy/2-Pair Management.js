// Given two arguments, return an array which contains these two arguments.

// function makePair(...arr) {
//     return [...arr]
// }

// function makePair(a, b) {
//     return [a, b]
// }

// function makePair(...arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i])
//     }
//     return result
// }

// function makePair(...arr) {
//     let result = [];
//     let i = 0;
//     while (i < arr.length) {
//         result.push(arr[i])
//         i++
//     }
//     return result
// }

function makePair(...arr) {
    return arr.reduce((acc, curr) => {
        acc.push(curr)
        return acc
    }, [])
}
console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));
// ➞ [1, 2]
// ➞ [51, 21]
// ➞ [512124, 215]

// Notes
// N/A