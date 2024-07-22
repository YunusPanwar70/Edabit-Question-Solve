function integerBoolean(num) {
    // return num.split('').map((digit) => digit === '1')
    // return [...num].map((digti) => digti === '1')
    let result = [];
    for (let i = 0; i < num.length; i++) {
        result.push(num[i] === '1')
    }
    return result
};
console.log(integerBoolean("100101"));
console.log(integerBoolean("10"));
console.log(integerBoolean("001"));
// ➞ [true, false, false, true, false, true]
// ➞ [true, false]
// ➞ [false, false, true]