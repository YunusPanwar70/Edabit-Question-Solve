// Given a string, return true if its length is even or false if the length is odd.

function oddOrEven(str) {
    if (str.length % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(oddOrEven("apples"));
console.log(oddOrEven("pears"));
console.log(oddOrEven("cherry"));
// ➞ true
// The word "apples" has 6 characters.
// 6 is an even number, so the program outputs true.
// ➞ false
// "pears" has 5 letters, and 5 is odd.
// Therefore the program outputs false.
// ➞ true