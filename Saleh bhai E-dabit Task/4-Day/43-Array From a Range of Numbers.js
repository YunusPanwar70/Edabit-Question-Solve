function rangeOfNum(start, end) {
    return start.filter((item) => item + 1)
    // let result = [];
    // for (let i = start + 1; i < end; i++) {
    //     result.push(i)
    // }
    // return result
}

console.log(rangeOfNum(2, 4));
console.log(rangeOfNum(5, 9));
console.log(rangeOfNum(2, 11));

// ➞ [3]
// ➞ [6, 7, 8]
// ➞ [3, 4, 5, 6, 7, 8, 9, 10]