function basicCalculator(n1, s, n2) {
    let result = 0;
    if (s === '+') {
        result = n1 + n2;
    } else if (s === '-') {
        result = n1 - n2;
    } else if (s === '/') {
        result = n1 / n2;
    } else if (s === '*') {
        result = n1 * n2;
    } else if (s === '/') {
        result = n1 / n2;
    } else if (s === 'x') {
        result = 0;
    }
    return result;
}

console.log(basicCalculator(2, '+', 4));
console.log(basicCalculator(6, '-', 5));
console.log(basicCalculator(12, '/', 3));
console.log(basicCalculator(3, '*', 4));
console.log(basicCalculator(1, '/', 0));
console.log(basicCalculator(1, 'x', 0));
// \\\
// ➞ 6
// ➞ 1
// ➞ 4
// ➞ 12
// ➞ null
// Division by zero is not possible
// 'x' is not an operator