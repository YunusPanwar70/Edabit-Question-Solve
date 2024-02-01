function lessThan100(a, b) {
    let sum = a + b;
    return sum < 100
        // if (sum < 100) {
        //     return true
        // } else {
        //     return false
        // }
}

console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));


// ➞ true
// 22 + 15 = 37
//  ➞ false
// 83 + 34 = 117
// ➞ true