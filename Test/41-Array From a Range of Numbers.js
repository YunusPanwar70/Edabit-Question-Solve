// Create a function that returns an array of all the integers between two given numbers start and end.

function rangeOfNum(start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(i)
    }
    return result
}
console.log(rangeOfNum(2, 4));
console.log(rangeOfNum(5, 9));
console.log(rangeOfNum(2, 11));
// ➞ [3]
// ➞ [6, 7, 8]
// ➞ [3, 4, 5, 6, 7, 8, 9, 10] 