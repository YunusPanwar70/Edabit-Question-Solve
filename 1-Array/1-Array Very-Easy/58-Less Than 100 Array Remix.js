function arrayLessThan100(arr) {
    let a = arr.reduce((b, c) => b + c, 0)
    return a < 100
}

console.log(arrayLessThan100([5, 57]));
console.log(arrayLessThan100([77, 30]));
console.log(arrayLessThan100([0]));



// ➞ true
// ➞ false
//  ➞ true