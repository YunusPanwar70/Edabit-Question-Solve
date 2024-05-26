function halfQuarterEighth(num) {
    let half = num / 2;
    let quarter = num / 4;
    let eighth = num / 8;
    return [half, quarter, eighth]
}

console.log(halfQuarterEighth(6));
console.log(halfQuarterEighth(22));
console.log(halfQuarterEighth(25));

// ➞ [3, 1.5, 0.75]
// ➞ [11, 5.5, 2.75]
// ➞ [12.5, 6.25, 3.125]