function negate(arr) {
    return arr.map((item) => item * -1);
}
console.log(negate([1, 2, 3, 4]));
console.log(negate([-1, 2, -3, 4]));
console.log(negate([]));
// ➞ [-1, -2, -3, -4]
// ➞ [1, -2, 3, -4]
// ➞ []