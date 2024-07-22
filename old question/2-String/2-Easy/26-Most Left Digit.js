// Write a function that takes a string as an argument and returns the left most digit in the string.

// function leftDigit(str) {
//     for (let i = 0; i < str.length; i++) {
//         let charCode = str.charCodeAt(i);
//         if (charCode >= 48 && charCode <= 57) {
//             return str[i];
//         }
//     }
//     return null;
// }

function leftDigit(str) {
    return str.split('').filter((item) => Number(item))[0]
}
console.log(leftDigit("TrAdE2W1n95!"));
console.log(leftDigit("V3r1ta$"));
console.log(leftDigit("U//DertHe1nflu3nC3"));
console.log(leftDigit("J@v@5cR1PT"));
// ➞ 2
// ➞ 3
// ➞ 1
// ➞ 5