// Create a function that returns true if the first array can be nested inside the second and false otherwise.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
function canNest(arr1, arr2) {
    let min1 = Math.min(...arr1)
    let min2 = Math.min(...arr2);
    return min1 > min2
}
console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));
// ➞ true
// ➞ true
// ➞ false
// ➞ false