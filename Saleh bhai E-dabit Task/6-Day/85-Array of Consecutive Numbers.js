function getSequence(start, end) {
    let result = [];
    for (let i = start ; i <= end; i++) {
        result.push(i)
    }
    return result
}
console.log(getSequence(1, 5));
console.log(getSequence(98, 100));
console.log(getSequence(1000, 1000));
// ➞ [1, 2, 3, 4, 5]
// ➞ [98, 99, 100]
// ➞ [1000]