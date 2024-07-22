// Array A is contained inside array B if each element in A also exists in B.

// The number of times a number is present doesn't matter. In other words, if we transformed both arrays into sets, A would be a subset of B.

// A = [3, 3, 9, 9, 9, 5]
// B = [1, 3, 9, 5, 8, 44, 44]

// A_Set = [3, 9, 5]
// B_Set = [1, 3, 9, 5, 8, 44]

// A_Set is a subset of B_Set
// Create a function that determines if the first array is a subset of the second.

function subset(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.every((item) => set2.has(item));
}
console.log(subset([1, 3], [1, 3, 3, 5])); // ➞ true
console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])); // ➞ true
console.log(subset([1, 3], [1, 33])); // ➞ false
console.log(subset([1, 3, 10], [10, 8, 8, 8])); // ➞ false
// ➞ true
// ➞ true
// ➞ false
// ➞ false