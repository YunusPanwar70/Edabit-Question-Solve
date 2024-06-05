// Write a regular expression that matches a string if it contains at least one digit.

function checkValues(str) {
    return str <= 2
}
console.log(checkValues("c8"));
console.log(checkValues("23cc4"));
console.log(checkValues("abwekz"));
console.log(checkValues("sdfkxi"));
// ➞ true
// ➞ true
// ➞ false
// ➞ false