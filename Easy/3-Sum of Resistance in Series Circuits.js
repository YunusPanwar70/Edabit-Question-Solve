function seriesResistance(arr) {
    const sum = arr.reduce((num1, num2) => num1 + num2)

    if (arr >= 15) {
        return sum + "ohms"
    } else {
        return sum + "ohm"
    }
}

console.log(seriesResistance([1, 5, 6, 3]));
console.log(seriesResistance([16, 3.5, 6]));
console.log(seriesResistance([0.5, 0.5]));


// ➞ "15 ohms"
// ➞ "25.5 ohms"
// ➞ "1.0 ohm"