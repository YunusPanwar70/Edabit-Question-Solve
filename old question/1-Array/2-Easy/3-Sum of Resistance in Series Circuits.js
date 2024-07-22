// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:
// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

// function seriesResistance(arr) {
//     let sum = arr.reduce((acc, val) => acc + val)
//     return `"${sum} ohms"`
// }
// function seriesResistance(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         count += arr[i]
//     }
//     return `${count} ohms`
// }

function seriesResistance(arr) {
    let count = 0;
    let i = 0;
    while (i < arr.length) {
        count += arr[i]
        i++
    }
    return `${count} ohms`
}
console.log(seriesResistance([1, 5, 6, 3]));
console.log(seriesResistance([16, 3.5, 6]));
console.log(seriesResistance([0.5, 0.5]));
// ➞ "15 ohms"
// ➞ "25.5 ohms"
// ➞ "1.0 ohm"