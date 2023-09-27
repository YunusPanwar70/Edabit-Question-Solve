function getOnlyEvens(arr) {
    return arr.filter((num1, num2) => num1 % 2 === 0 && num2 % 2 === 0);
};

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));
console.log(getOnlyEvens([1, 2, 3, 4, 5]));

// ➞ [2, 4]
// ➞ [0, 2, 4]
// ➞ []