function multiplyByLength(arr) {
    return arr.map((item) => item * arr.length)
}
console.log(multiplyByLength([2, 3, 1, 0]));
console.log(multiplyByLength([4, 1, 1]));
console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1]));
console.log(multiplyByLength([0]));
// ➞ [8, 12, 4, 0]
// ➞ ([12, 3, 3])
// ➞  [7, 0, 21, 21, 49, 14, 7]
// ➞ ([0])