// Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.

function getDecimalPlaces(str) {
    function getDecimalPlaces(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '.') {
                count++
            }
        }
        return count
    }
}
console.log(getDecimalPlaces("43.20"));
console.log(getDecimalPlaces("400"));
console.log(getDecimalPlaces("3.1"));
// ➞ 2
// ➞ 0
// ➞ 1