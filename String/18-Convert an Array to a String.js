function arrayToString(str) {
    return str.join('');
};

console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));


// ➞ "123456"
// ➞ "abcdef"
// ➞ "123asdAAAA"