// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

// function binaryToDecimal(arr) {
//     let value = arr.join('');
//     return parseInt(value, 2)
// }

function binaryToDecimal(arr) {
    let decimal = 0;
    for (let i = 0; i < arr.length; i++) {
        decimal = decimal * 2 + arr[i]
    }
    return decimal
}
console.log(binaryToDecimal([0, 0, 0, 1]));
console.log(binaryToDecimal([0, 0, 1, 0]));
console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]));
// ➞ 1
// ➞ 2
// ➞ 1005

// Notes
// N/A