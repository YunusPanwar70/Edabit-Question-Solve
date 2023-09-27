function check(arr, el) {
    return arr.includes(el);
}

console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));

// ➞ true
// ➞ false
// ➞ true
// ➞ false