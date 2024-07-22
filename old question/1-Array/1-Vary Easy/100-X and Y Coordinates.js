function convertCartesian(x, y) {
    return x.map((value, index) => [value, y[index]])
}
console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]));
console.log(convertCartesian([9, 8, 3], [1, 1, 1]));


// ➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]
// ➞ [[9, 1], [8, 1], [3, 1]]