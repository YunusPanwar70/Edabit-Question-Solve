// Create a function that removes the first and last characters from a string.

// function removeFirstLast(str) {
//     return str.slice(1, -1);
// }

// function removeFirstLast(str) {
//     if (str.length <= 2) {
//         return str;
//     }
//     let result = '';
//     for (let i = 1; i < str.length - 1; i++) {
//         result += str[i]
//     }
//     return result
// }

function removeFirstLast(str) {
    if (str.length <= 2) {
        return str;
    }
    let result = '';
    let i = 1;
    while (i < str.length - 1) {
        result += str[i]
        i++
    }
    return result
}
console.log(removeFirstLast("hello"));
console.log(removeFirstLast("maybe"));
console.log(removeFirstLast("benefit"));
console.log(removeFirstLast("a"));
// ➞ "ell"
// ➞ "ayb"
// ➞ "enefi"
// ➞ "a"