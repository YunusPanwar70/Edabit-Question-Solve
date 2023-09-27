function isAvgWhole(arr) {
    if (arr.length === 0) {
        return false;
    }
    const sum = arr.reduce((num1, num2) => num1 + num2);
    const average = sum / arr.length;

    return Number.isInteger(average);
}

console.log(isAvgWhole([1, 3]));
console.log(isAvgWhole([1, 2, 3, 4]));
console.log(isAvgWhole([1, 5, 6]));
console.log(isAvgWhole([1, 1, 1]));
console.log(isAvgWhole([9, 2, 2, 5]));

// ➞ true
// ➞ false
//  ➞ true
// ➞ true
// ➞ false