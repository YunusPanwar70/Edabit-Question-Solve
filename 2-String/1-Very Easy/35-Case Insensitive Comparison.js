// Write a function that validates whether two strings are identical. Make it case insensitive.

function match(s1, s2) {
    const lowerWord = s2.toLowerCase()
    return lowerWord === s1
}
console.log(match("hello", "hELLo"));
console.log(match("motive", "emotive"));
console.log(match("venom", "VENOM"));
console.log(match("mask", "mAskinG"));
// ➞ true
// ➞ false
// ➞ true
// ➞ false