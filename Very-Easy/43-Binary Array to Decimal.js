function binaryToDecimal(arr) {
    const a = arr.join("")
    return parseInt(a, 2)
}

console.log(binaryToDecimal([0, 0, 0, 1]));
console.log(binaryToDecimal([0, 0, 1, 0]));
console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]));

// ➞ 1
// ➞ 2
// ➞ 1005