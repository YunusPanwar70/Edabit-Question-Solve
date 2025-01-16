// Using the .test() method in your function, return whether a string contains the characters "a" and "c" (in that order) with any number of characters (including zero) between them.

function asterisk(str) {
    let regex = /a.*c/g;
    return regex.test(str);
};
console.log(asterisk("account"));
console.log(asterisk("abccount"));
console.log(asterisk("abbbccount"));
console.log(asterisk("bbbccount"));
// ➞ true
// ➞ true
// ➞ true
// ➞ false

// Notes
// N/A