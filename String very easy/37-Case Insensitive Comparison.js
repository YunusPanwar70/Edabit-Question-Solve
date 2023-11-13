function match(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(match("hello", "hELLo"));
console.log(match("motive", "emotive"));
console.log(match("venom", "VENOM"));
console.log(match("mask", "mAskinG"));


// ➞ true
// ➞ false
// ➞ true
// ➞ false