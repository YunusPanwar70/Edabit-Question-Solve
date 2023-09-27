function getSumOfItems(arr) {
    return arr.reduce((num1, num2) => num1 + num2);
};

console.log(getSumOfItems([2, 7, 4]));
console.log(getSumOfItems([45, 3, 0]));
console.log(getSumOfItems([-2, 84, 23]));

// ➞ 13
// ➞ 48
// ➞ 105