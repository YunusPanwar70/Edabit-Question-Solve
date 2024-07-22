// Write a function that retrieves the last n elements from an array.

function last(arr, n) {
    return n > arr.length ? "invalid" : arr.slice(-n);
}
console.log(last([1, 2, 3, 4, 5], 1));
console.log(last([4, 3, 9, 9, 7, 6], 3));
console.log(last([1, 2, 3, 4, 5], 7));
console.log(last([1, 2, 3, 4, 5], 0));
// ➞ [5]
// ➞ [9, 7, 6]
// ➞ "invalid"
// ➞ []