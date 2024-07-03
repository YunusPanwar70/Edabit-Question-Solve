// function length(str) {
// return str.length
// }

// function length(str) {
//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i]) {
//             result++;
//         }
//     }
//     return result
// }

function length(str) {
    let count = 0;
    let i;
    for (const key in str) {
        key[i] += count
        count++
    }
    return count
}
console.log(length("Hello World"));
console.log(length("Edabit"));
console.log(length("wash your hands!"));
// ➞ 11
// ➞ 6
// ➞ 16