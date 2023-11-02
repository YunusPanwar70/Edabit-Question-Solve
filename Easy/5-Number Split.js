function numberSplit(n) {
    const a = Math.floor(n / 2);
    const b = Math.ceil(n / 2);
    return [a, b]
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));


// ➞ [2, 2]
// ➞ [5, 5]
// ➞ [5, 6]
// ➞ [-5, -4]