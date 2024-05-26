function halfQuarterEighth(n) {
    let half = n / 2;
    let quarter = n / 4;
    let eighth = n / 8;
    return [half, quarter, eighth]
}
console.log(halfQuarterEighth(6));
console.log(halfQuarterEighth(22));
console.log(halfQuarterEighth(25));

// ➞ [3, 1.5, 0.75]
// ➞ [11, 5.5, 2.75]
// ➞ [12.5, 6.25, 3.125]