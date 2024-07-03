// Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.
// String.prototype.repeat() is not allowed

// function repetition(str, n) {
//     let result = "";
//     for (let i = 0; i < n; i++) {
//         result += str;
//     }
//     return result;
// }

// function repetition(str, n) {
//     return str.repeat(n)
// }

// function repetition(str, n) {
//     let result = '';
//     let i = 0;
//     while (i < n) {
//         result += str
//         i++
//     }
//     return result
// }
console.log(repetition("ab", 3));
console.log(repetition("kiwi", 1));
console.log(repetition("cherry", 2));
// ➞ "ababab"
// ➞ "kiwi"
// ➞ "cherrycherry"