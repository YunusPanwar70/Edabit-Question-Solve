function calculateExponent(num, exp) {
    let result = 1;

    for (let i = 0; i < exp; i++) {
        result *= num
    }
    return result
}

console.log(calculateExponent(5, 5));
console.log(calculateExponent(10, 10));
console.log(calculateExponent(3, 3));

// ➞ 3125
// ➞ 10000000000
// ➞ 27