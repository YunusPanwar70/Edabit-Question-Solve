function convertToDecimal(str) {
    return str.map(percentage => parseFloat(percentage) / 100);
}
console.log(convertToDecimal(["1%", "2%", "3%"]));
console.log(convertToDecimal(["45%", "32%", "97%", "33%"]));
console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]));
// ➞ [0.01, 0.02, 0.03]
// ➞ [0.45, 0.32, 0.97, 0.33]
// ➞ [0.33, 0.981, 0.5644, 1]