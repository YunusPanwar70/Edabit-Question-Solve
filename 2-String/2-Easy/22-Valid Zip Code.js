// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.

function isValid(str) {
    if (parseInt(str) !== 5) {
        return false
    }
    return true
}
console.log(isValid("59001"));
console.log(isValid("853a7"));
console.log(isValid("732 32"));
console.log(isValid("393939"));
// ➞ true
// ➞ false
// ➞ false
// ➞ false