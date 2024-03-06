function search(arr, item) {
    // return arr.indexOf(item);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
};

console.log(search([1, 5, 3], 5));
console.log(search([9, 8, 3], 3));
console.log(search([1, 2, 3], 4));

// ➞ 1
// ➞ 2
// ➞ -1