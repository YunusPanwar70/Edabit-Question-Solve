// Create a function that takes a number and returns an array with the digits of the number in reverse order.

// function reverseArr(arr) {
//     return arr.toString().split('').map(Number).reverse();
// }

function reverseArr(arr) {
    const digit = [];
    const numString = arr.toString();
    for (let i = numString.length - 1; i >= 0; i--) {
        digit.push(Number(numString[i]))
    }
    return digit
}
console.log(reverseArr(1485979));
console.log(reverseArr(623478));
console.log(reverseArr(12345));
// ➞ [9, 7, 9, 5, 8, 4, 1]
// ➞ [8, 7, 4, 3, 2, 6]
// ➞ [5, 4, 3, 2, 1]