function halfQuarterEighth(n) {
    const a = n / 2;
    const b = n / 4;
    const c = n / 8;
    return [a, b, c]
}

console.log(halfQuarterEighth(6));
console.log(halfQuarterEighth(22));
console.log(halfQuarterEighth(25));


// ➞ [3, 1.5, 0.75]
// ➞ [11, 5.5, 2.75]
// ➞ [12.5, 6.25, 3.125]