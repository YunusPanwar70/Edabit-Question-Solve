// Write a DECIMATOR function which takes a string and decimates it (i.e. it removes the last 1/10 of the characters).

// Always round up: if the string has 21 characters, 1/10 of the characters would be 2.1 characters, hence the DECIMATOR removes 3 characters. The DECIMATOR shows no mercy!

function DECIMATOR(str) {
    return str.substr(-1)
}
console.log(DECIMATOR("1234567890"));
console.log(DECIMATOR("1234567890AB"));
console.log(DECIMATOR("123"));
console.log(DECIMATOR("123456789012345678901"));
// ➞ "123456789"
// 10 characters, removed 1.
// ➞ "1234567890"
// 12 characters, removed 2.
// ➞ "12"
// 3 characters, removed 1.
// ➞ "123456789012345678"
// 21 characters, removed 3.