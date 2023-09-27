function halfQuarterEighth(arr) {
    const half = arr / 2;
    const quarter = arr / 4;
    const eighth = arr / 8;
    return [half, quarter, eighth];
};
console.log(halfQuarterEighth(6));
console.log(halfQuarterEighth(22));
console.log(halfQuarterEighth(25));

// ➞ [3, 1.5, 0.75]
// ➞ [11, 5.5, 2.75]
// ➞ [12.5, 6.25, 3.125]