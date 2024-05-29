// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(num) {
    return [...num].map((item) => item === '1')
}

// function integerBoolean(num) {
//     return num.split('').map((item) => item === '1');
// }

// function integerBoolean(num) {
//     let result = [];
//     for (let i = 0; i < num.length; i++) {
//         result.push(num[i] === '1')
//     }
//     return result
// }
console.log(integerBoolean("100101"));
console.log(integerBoolean("10"));
console.log(integerBoolean("001"));
// ➞ [true, false, false, true, false, true]
// ➞ [true, false]
// ➞ [false, false, true]