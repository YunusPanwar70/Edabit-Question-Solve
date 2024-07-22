// Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.

function isBoiling(str) {
    let changeValue = parseInt(str);
    let temp = str.slice(-1);
    if (temp === 'F') {
        return changeValue >= 212
    } else if (temp === 'C') {
        return changeValue >= 100
    }
}
console.log(isBoiling("212F"));
console.log(isBoiling("100C"));
console.log(isBoiling("0F"));
// ➞ true
// ➞ true
// ➞ false