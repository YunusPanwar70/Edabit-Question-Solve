// function wordLengths(arr) {
// return arr.map(item => item.length)
// }

// function wordLengths(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i].length)
//     }
//     return result
// }

// function wordLengths(arr) {
//     let count = 0;
//     let i;
//     let result = [];
//     for (const key in arr) {
//         key[i] += count
//         result.push(count++)
//     }
//     return result
// }
console.log(wordLengths(["hello", "world"]));
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));
// ➞ [5, 5]
// ➞ [9, 12, 9]
// ➞ [3, 5, 9, 4, 2, 3, 8]