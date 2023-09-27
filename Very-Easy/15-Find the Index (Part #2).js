function search(arr, item) {
    return arr.indexOf(item);
}
console.log(search([1, 2, 3, 4], 3));
console.log(search([2, 4, 6, 8, 10], 8));
console.log(search([1, 3, 5, 7, 9], 11));

// ➞ 2
// ➞ 3
// ➞ -1