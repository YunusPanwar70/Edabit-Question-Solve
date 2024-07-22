function findSmallestNum(arr) {
    let sorting = arr.sort((a, b) => a - b);
    return sorting[0]
}
console.log(findSmallestNum([34, 15, 88, 2]));
console.log(findSmallestNum([34, -345, -1, 100]));
console.log(findSmallestNum([-76, 1.345, 1, 0]));
console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]));
console.log(findSmallestNum([7, 7, 7]));
// ➞ 2
// ➞ -345
// ➞ -76
// ➞ -0.9999
// ➞ 7