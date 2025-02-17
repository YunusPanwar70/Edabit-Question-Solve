function largestNumbers(n, arr) {
    // return num.sort((a, b) => a - b)
    arr.sort((a, b) => b - a);
    let a = arr.slice(0, n)
    return a.reverse()
}
console.log(largestNumbers(2, [4, 3, 2, 1]));
console.log(largestNumbers(1, [7, 19, 4, 2]));
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16]));
console.log(largestNumbers(0, [1, 3, 4, 2]));
console.log(largestNumbers(2, [1, 3, 100, 4, 2, 200, 300, 2]));
// ➞ [3, 4]
// ➞ [19]
// ➞ [16, 18, 57]
// ➞ []