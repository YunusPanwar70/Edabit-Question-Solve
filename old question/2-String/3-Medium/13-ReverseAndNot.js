// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
// To illustrate:
// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

function reverseAndNot(n) {
    let str = n.toString();
    let reve = str.split('').reverse().join('')
    return reve + n
}
console.log(reverseAndNot(123));
console.log(reverseAndNot(152));
console.log(reverseAndNot(123456789));
// ➞ 321123
// ➞ 251152
// ➞ 987654321123456789