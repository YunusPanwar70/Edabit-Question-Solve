function difference(arr) {
    let a = Math.max(arr);
    let b = Math.min(arr);
    return a - b
}
console.log(difference([10, 15, 20, 2, 10, 6]));
console.log(difference([-3, 4, -9, -1, -2, 15]));
console.log(difference([4, 17, 12, 2, 10, 2]));
// ➞ 18
// 20 - 2 = 18
// ➞ 24
// 15 - (-9) = 24
// ➞ 15