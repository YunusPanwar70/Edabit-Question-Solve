// If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. It is possible to calculate the total resistance of a parallel circuit by using this formula:

// 1/RTotal = 1/R1 + 1/R2 + 1/R3 ...

// Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.

// Worked Example

function parallelResistance(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += 1 / arr[i]
    }
    let total = 1 / result;
    return Math.round(total * 10) / 10;
}
console.log(parallelResistance([6, 3, 6]));
console.log(parallelResistance([6, 3]));
console.log(parallelResistance([10, 20, 10]));
console.log(parallelResistance([500, 500, 500]));
// ➞ 1.5
// 1/RTotal = 1/6 + 1/3 + 1/6
// 1/RTotal = 2/3
// RTotal = 3/2 = 1.5
// ➞ 2
// ➞ 4
// ➞ 166.6
// Round to the nearest decimal place
// Notes
// Note that you should rearrange to return the Resistance Total, not 1 / Resistance Total.
// Round to the nearest decimal place.
// All inputs will be valid.