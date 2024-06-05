// Create a function that removes the first and last characters from a string.

function removeFirstLast(str) {
    return str.slice(1, -1);
}
console.log(removeFirstLast("hello"));
console.log(removeFirstLast("maybe"));
console.log(removeFirstLast("benefit"));
console.log(removeFirstLast("a"));
// ➞ "ell"
// ➞ "ayb"
// ➞ "enefi"
// ➞ "a"