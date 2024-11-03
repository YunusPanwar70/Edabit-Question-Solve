// Create a function which returns the length of a string, WITHOUT using String.length property.

// function length(str) {
//     return str.length
// }

// function length(str) {
//     return str.split('').reduce((item) => item + 1, 0)
// }

// function length(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         count++
//     }
//     return count
// }

function length(str) {
    let count = 0;
    let i = 0;
    while (count < str.length) {
        count++
        i++
    }
    return count
}
console.log(length("Hello World"));
console.log(length("Edabit"));
console.log(length("wash your hands!"));
// ➞ 11
// ➞ 6
// ➞ 16

// Notes
// N/A