// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

// function Go(n) {
//     let re = '-';
//     return re.repeat(n)
// }

// function Go(n) {
//     let char = '';
//     for (let i = 0; i < n; i++) {
//         char += '-'
//     }
//     return char
// }

function Go(n) {
    let char = '';
    let i = 0;
    while (i < n) {
        char += '-'
        i++
    }
    return char
}
console.log(Go(1));
console.log(Go(5));
console.log(Go(3));
// ➞ "-"
// ➞ "-----"
// ➞ "---"