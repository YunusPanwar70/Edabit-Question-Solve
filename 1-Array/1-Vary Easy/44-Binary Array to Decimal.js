function binaryToDecimal(arr) {
    // let value = arr.join('');
    // return parseInt(value, 2)
    let decimalValue = 0;
    for (let i = 0; i < arr.length; i++) {
        decimalValue = decimalValue * 2 + arr[i]
    } return decimalValue
}
console.log(binaryToDecimal([0, 0, 0, 1]));
console.log(binaryToDecimal([0, 0, 1, 0]));
console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]));
// ➞ 1
// ➞ 2
// ➞ 1005