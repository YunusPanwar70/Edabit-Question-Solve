function drop(arr1, arr2) {
    return arr1.slice(arr2);
}

console.log(drop([1, 2, 3], 1));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0));

// ➞ [2, 3]
// ➞ [3]
// ➞ []
// ➞ [1, 2, 3]