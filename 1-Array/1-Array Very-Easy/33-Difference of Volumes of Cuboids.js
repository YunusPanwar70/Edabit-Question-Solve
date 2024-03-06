function findDifference(a) {
    return a.reduce((acc, val) => acc * val, 1);
}

console.log(findDifference([28, 16, 29], [7, 8, 17]));
console.log(findDifference([9, 22, 18], [16, 24, 10]));
console.log(findDifference([1, 9, 25], [10, 7, 9]));
console.log(findDifference([7, 6, 16], [26, 9, 26]));



// ➞ 12040
// ➞ 276
// ➞ 405
//  ➞ 5412