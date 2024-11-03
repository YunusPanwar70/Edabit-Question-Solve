// Create a function that takes a string and returns a string with spaces in between all of the characters.

// function spaceMeOut(str) {
//     return str.split('').join(' ')
// }

// function spaceMeOut(str) {
//     return Array.from(str).join(' ');
// }

// function spaceMeOut(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         result += str[i]
//         if (i < str.length) {
//             result += ' '
//         }
//     }
//     return result
// }

function spaceMeOut(str) {
    const chars = Array.from(str);
    return chars
}
console.log(spaceMeOut("space"));
console.log(spaceMeOut("far out"));
console.log(spaceMeOut("elongated musk"));
// ➞ "s p a c e"
// ➞ "f a r   o u t"
// ➞ "e l o n g a t e d   m u s k"

// Notes
// Treat a space as its own character (i.e. leave three spaces between words).