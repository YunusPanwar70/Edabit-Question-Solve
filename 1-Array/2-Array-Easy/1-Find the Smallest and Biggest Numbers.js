function minMax(arr) {
    const a = Math.min(...arr);
    const b = Math.max(...arr);
    return [a, b];
};

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));

// ➞ [1, 5]
// ➞ [5, 2334454]
// ➞ [1, 1]