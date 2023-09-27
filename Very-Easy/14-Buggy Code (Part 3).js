function sumArray(arr) {
    return arr.reduce((num1, num2) => num1 + num2, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([0, 4, 8, 12]));

// ➞ 15
// ➞ 0
// ➞ 24