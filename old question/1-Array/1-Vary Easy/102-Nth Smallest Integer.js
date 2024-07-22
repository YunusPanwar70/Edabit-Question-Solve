function nthSmallest(arr, n) {
    arr.slice((a, b) => b - a);
    if (n > arr.length) {
        return null
    } return arr[n - 1]
}
console.log(nthSmallest([1, 3, 5, 7], 1));
console.log(nthSmallest([1, 3, 5, 7], 3));
console.log(nthSmallest([1, 3, 5, 7], 5));
console.log(nthSmallest([7, 3, 5, 1], 2));
// ➞ 1
// ➞ 5
// ➞ null
// ➞ 3