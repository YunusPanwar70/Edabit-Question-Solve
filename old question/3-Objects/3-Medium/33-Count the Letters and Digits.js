// Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.

function countAll(str) {
    let letters = 0;
    let digits = 0;
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || charCode >= 97 && charCode <= 122) {
            letters++;
        } else if (charCode >= 48 && charCode < 57) {
            digits++;
        }
    }
    return {
        LETTERS: letters,
        DIGITS: digits
    }
}
console.log(countAll("Hello World"));
console.log(countAll("H3ll0 Wor1d"));
console.log(countAll("149990"));

// ➞ { "LETTERS":  10, "DIGITS": 0 }
// ➞ { "LETTERS":  7, "DIGITS": 3 }
// ➞ { "LETTERS": 0, "DIGITS": 6 }

// Notes
// Tests contain only alphanumeric characters.
// Spaces are not letters.
// All tests contain valid strings.