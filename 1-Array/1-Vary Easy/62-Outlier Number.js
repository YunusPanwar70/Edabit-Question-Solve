function outlierNumber(arr) {
    return arr.filter((item) => item % 2)
}
console.log(outlierNumber([2, 3, 4]));
console.log(outlierNumber([1, 2, 3]));
console.log(outlierNumber([4, 1, 3, 5, 9]));
// 2 and 4 are even numbers.
// 3 is an outlier number.
// ➞ 3
// ➞ 2
// ➞ 4

// this answar cannot match