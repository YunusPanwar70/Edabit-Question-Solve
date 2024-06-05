// In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

function isTrue(str) {
    let a = str.split('')
    return parseInt(a)
}
console.log(isTrue("2=2"));
console.log(isTrue("8<7"));
console.log(isTrue("5=13"));
console.log(isTrue("15>4"));
// ➞ true
// ➞ false
// ➞ false
// ➞ true