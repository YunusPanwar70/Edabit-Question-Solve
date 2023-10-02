function addIndexes(arr) {
    return arr.map((value, index) => value + index)
}

console.log(addIndexes([0, 0, 0, 0, 0]));
console.log(addIndexes([1, 2, 3, 4, 5]));
console.log(addIndexes([5, 4, 3, 2, 1]));



// ➞ [0, 1, 2, 3, 4]
// ➞ [1, 3, 5, 7, 9]
// ➞ [5, 5, 5, 5, 5]