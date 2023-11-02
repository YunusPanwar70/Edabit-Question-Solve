function canNest(arr1, arr2) {
    const a = Math.min(...arr1);
    const b = Math.max(...arr1);
    const c = Math.min(...arr2);
    const d = Math.max(...arr2)
    return a > c && b < d
}

console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));


// ➞ true
// ➞ true
// ➞ false
// ➞ false