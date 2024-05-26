function arrayLessThan100(arr) {
    const value = arr.reduce((acc, val) => acc + val);
    return value < 100
}
console.log(arrayLessThan100([5, 57]));
console.log(arrayLessThan100([77, 30]));
console.log(arrayLessThan100([0]));
// ➞ true
// ➞ false
// ➞ true