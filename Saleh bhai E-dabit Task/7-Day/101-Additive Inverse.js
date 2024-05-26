function additiveInverse(arr) {
    return arr.map((item) => item * -1)
}
console.log(additiveInverse([5, -7, 8, 3]));
console.log(additiveInverse([1, 1, 1, 1, 1]));
console.log(additiveInverse([-5, -25, 35]));
// ➞ [-5, 7, -8, -3]
// ➞ [-1, -1, -1, -1, -1]
// ➞ [5, 25, -35]