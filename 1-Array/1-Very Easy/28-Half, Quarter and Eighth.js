// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// function halfQuarterEighth(n) {
//     let half = n / 2;
//     let quarter = n / 4;
//     let eighth = n / 8;
//     return [half, quarter, eighth]
// }

// function halfQuarterEighth(n) {
//     let fraction = [2, 4, 8];
//     let result = [];
//     for (let i = 0; i < fraction.length; i++) {
//         result.push(n / fraction[i])
//     }
//     return result
// }

function halfQuarterEighth(n) {
    let fraction = [2, 4, 8];
    return fraction.map((item) => n / item)
}
console.log(halfQuarterEighth(6));
console.log(halfQuarterEighth(22));
console.log(halfQuarterEighth(25));
// ➞ [3, 1.5, 0.75]
// ➞ [11, 5.5, 2.75]
// ➞ [12.5, 6.25, 3.125]

// Notes
// The order of the array is: half, quarter, eighth./