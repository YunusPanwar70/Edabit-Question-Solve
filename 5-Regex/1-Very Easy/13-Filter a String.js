// Mubashir needs your help to count uppercase letters, lowercase letters, numbers and special characters in a given string.

// Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.

function filterString(txt) {
    let upperCase = (txt.match(/[A-Z]/g) || []).length;
    let lowerCase = (txt.match(/[a-z]/g) || []).length;
    let numberCount = (txt.match(/[0-9]/g) || []).length;
    let specialCharCount = (txt.match(/[^A-Za-z0-9]/g) || []).length;
    return [upperCase, lowerCase, numberCount, specialCharCount];
}
console.log(filterString("*$(#Mu12bas43hiR%@*!"));
console.log(filterString("^^Edabit^^%$#12379"));
console.log(filterString("**Airforce1**"));
// ➞ [2, 6, 4, 8]
// 2 uppercase letters
// 6 lowercase letters
// 4 numbers
// 8 special characters
// ➞ [1, 5, 5, 7]
// ➞ [1, 7, 1, 4]

// Notes
// N/A