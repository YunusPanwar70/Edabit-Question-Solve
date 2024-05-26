function countdown(arr) {
    let result = [];
    for (let i = 0; i <= arr; i++) {
        result.push(i);
    }
    return result
}
console.log(countdown(5));
console.log(countdown(1));
console.log(countdown(0));
// ➞ [5, 4, 3, 2, 1, 0]
// ➞ [1, 0]
// ➞ [0]