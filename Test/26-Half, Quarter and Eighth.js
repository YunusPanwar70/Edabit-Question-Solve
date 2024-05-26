// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

function halfQuarterEighth(arr) {
    let half = arr / 2;
    let quarter = arr / 4;
    let eighth = arr / 8;
    return [half, quarter, eighth]
}
console.log(halfQuarterEighth(6));
console.log(halfQuarterEighth(22));
console.log(halfQuarterEighth(25));
// ➞ [3, 1.5, 0.75]
// ➞ [11, 5.5, 2.75]
// ➞ [12.5, 6.25, 3.125]