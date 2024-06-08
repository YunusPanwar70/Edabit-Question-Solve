// Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.
// To illustrate:
// arr1 = [1, 3, 4, 4, 4]
// arr2 = [2, 5, 7]
// In arr1, the number 4 appears three times, which means it contains three unique elements: [1, 3, 4]. Since arr1 and arr2 both contain the same number of unique elements, this example would return true.

function same(arr1, arr2) {
    let unique1 = new Set(arr1);
    let unique2 = new Set(arr2);
    return unique1.size === unique2.size;
}
console.log(same([1, 3, 4, 4, 4], [2, 5, 7]));
console.log(same([9, 8, 7, 6], [4, 4, 3, 1]));
console.log(same([2], [3, 3, 3, 3, 3]));
// ➞ true
// ➞ false
// ➞ true