// Create a function which returns the length of a string, WITHOUT using String.length property.

// function length(str) {
//     return str.length
// }
function length(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i]) {
            result++
        }
    }
    return result
}
console.log(length("Hello World"));
console.log(length("Edabit"));
console.log(length("wash your hands!"));
// ➞ 11
// ➞ 6
// ➞ 16