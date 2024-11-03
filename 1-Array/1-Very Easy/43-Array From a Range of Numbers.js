// Create a function that returns an array of all the integers between two given numbers start and end.

// function rangeOfNum(start, end) {
//     let result = [];
//     for (let i = start + 1; i < end; i++) {
//         result.push(i)
//     }
//     return result
// }

function rangeOfNum(start, end) {
    let result = [];
    let i = start + 1;
    while (i < end) {
        result.push(i);
        i++
    }
    return result
}
console.log(rangeOfNum(2, 4));
console.log(rangeOfNum(5, 9));
console.log(rangeOfNum(2, 11));
// ➞ [3]
// ➞ [6, 7, 8]
// ➞ [3, 4, 5, 6, 7, 8, 9, 10]

// Notes
// start will always be <= end.
// start and end are NOT included in the final array.
// If start == end, return an empty array.