function checkAllEven(arr) {
    return arr.evrey(x % 2 === 0)
}
console.log(checkAllEven([1, 2, 3, 4]));
console.log(checkAllEven([2, 4, 6]));
console.log(checkAllEven([5, 6, 8, 10]));
console.log(checkAllEven([-2, 2, -2, 2]));
// ➞ false
// ➞ true
// ➞ false
// ➞ true