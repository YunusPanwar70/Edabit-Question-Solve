// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
function greaterThanOne(str) {
    return eval(str) > 1
}
console.log(greaterThanOne("1/2"));
console.log(greaterThanOne("7/4"));
console.log(greaterThanOne("10/10"));
// ➞ false
// ➞ true
// ➞ false