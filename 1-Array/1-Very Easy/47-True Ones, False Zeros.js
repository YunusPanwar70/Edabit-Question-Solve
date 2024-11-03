// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// function integerBoolean(str) {
//     let splitValue = str.split('')
//     return splitValue.map((item) => item === '0' ? false : true)
// }

function integerBoolean(str) {
    let splitValue = str.split('');
    let result = [];
    for (let i = 0; i < splitValue.length; i++) {
        if (splitValue[i] === '1') {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
}
console.log(integerBoolean("100101"));
console.log(integerBoolean("10"));
console.log(integerBoolean("001"));
// ➞ [true, false, false, true, false, true]
// ➞ [true, false]
// ➞ [false, false, true]

// Notes
// Expect numbers with 0 and 1 only.