// Write a function that returns true if there exists at least one number that is larger than or equal to n.

// function existsHigher(arr, num) {
//     return arr.some((number) => number >= num)
// }
// function existsHigher(arr, n) {
//     return arr.filter((item) => item >= n).length > 0
// }
function existsHigher(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= n) {
            return true
        }
    }
    return false
}
console.log(existsHigher([5, 3, 15, 22, 4], 10));
console.log(existsHigher([1, 2, 3, 4, 5], 8));
console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4));
console.log(existsHigher([], 5));
// ➞ true
// ➞ false
// ➞ true
// ➞ false