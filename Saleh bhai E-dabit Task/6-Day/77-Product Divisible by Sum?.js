function divisible(arr) {
    return arr.reduce((item, val) => item % val ? true : false)
}
console.log(divisible([3, 2, 4, 2]));
console.log(divisible([4, 2, 6]));
console.log(divisible([3, 5, 1]));
// ➞ false
// ➞ true
// 4 * 2 * 6 / (4 + 2 + 6)
// ➞ false 