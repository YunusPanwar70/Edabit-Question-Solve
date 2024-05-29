// Create a function that returns true if a string is empty and false otherwise.
function isEmpty(str) {
    if (str === "") {
        return true
    } else {
        return false
    }
}
console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("a"));
// ➞ true
// ➞ false
// ➞ false