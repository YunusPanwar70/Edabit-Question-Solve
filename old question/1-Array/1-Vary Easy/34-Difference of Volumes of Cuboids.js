function findDifference(a, b) {
    let one = 1;
    let two = 1;
    for (let i = 0; i < a.length; i++) {
        one *= a[i]
        two *= b[i]
    }
    return Math.abs(one - two)
}
console.log(findDifference([28, 16, 29], [7, 8, 17]));
console.log(findDifference([9, 22, 18], [16, 24, 10]));
console.log(findDifference([1, 9, 25], [10, 7, 9]));
console.log(findDifference([7, 6, 16], [26, 9, 26]));
// ➞ 12040
// ➞ 276
// ➞ 405
// ➞ 5412