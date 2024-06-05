// A palindrome is a word that is identical forward and backwards.

// mom
// racecar
// kayak
// Given a word, create a function that checks whether it is a palindrome.
// function name(str) {
//     return str.split('').reverse().join('') === str
// }

function checkPalindrome(str) {
    let result = [];
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return str === result
}
console.log(checkPalindrome("mom"));
console.log(checkPalindrome("scary"));
console.log(checkPalindrome("reviver"));
console.log(checkPalindrome("stressed"));
// ➞ true
// ➞ false
// ➞ true
// ➞ false