function findLargestNum(arr) {
    return Math.max(...arr)
}
console.log(findLargestNum([4, 5, 1, 3]));
console.log(findLargestNum([300, 200, 600, 150]));
console.log(findLargestNum([1000, 1001, 857, 1]));
// ➞ 5
// ➞ 600
// ➞ 1001