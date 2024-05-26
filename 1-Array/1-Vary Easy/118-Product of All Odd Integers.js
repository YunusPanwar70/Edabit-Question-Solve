// Create a function that returns the product of all odd integers in an array.
function oddProduct(arr) {
    const oddNumber = arr.filter((item) => item % 2 !== 0);
    return oddNumber.reduce((acc, val) => acc * val)
}
console.log(oddProduct([3, 4, 1, 1, 5]));
console.log(oddProduct([5, 5, 8, 2, 4, 32]));
console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]));
// ➞ 15
// ➞ 25
// ➞ 1