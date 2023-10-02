function integerBoolean(str) {
    return str.split('').map(char => char == '1')
}

console.log(integerBoolean("100101"));
console.log(integerBoolean("10"));
console.log(integerBoolean("001"));

// ➞ [true, false, false, true, false, true]
// ➞ [true, false]
// ➞ [false, false, true]