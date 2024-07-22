// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

function maskify(str) {
    if (str.length === 0) {
        return ''
    }
    let maskedString = '';
    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 4) {
            maskedString += '#'
        } else {
            maskedString += str[i]
        }
    }
    return maskedString
}
console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));

// ➞ "############5616"
// ➞ "#######5616"
// ➞ "1"
// ➞ ""

// Notes
// The maskify function must accept a string of any length.
// An empty string should return an empty string (fourth example above).