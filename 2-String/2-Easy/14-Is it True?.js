function isTrue(str) {
    // Replace '=' with '=='
    str = str.replace('=', '==');
    return eval(str);
}

console.log(isTrue("2=2"));   // ➞ true
console.log(isTrue("8<7"));   // ➞ false
console.log(isTrue("5=13"));  // ➞ false
console.log(isTrue("15>4"));  // ➞ true
