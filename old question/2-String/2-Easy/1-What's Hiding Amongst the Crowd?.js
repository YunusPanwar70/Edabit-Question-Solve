// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

function detectWord(str) {
    let word = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            word += str[i];
        }
    }
    return word;
}
console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));
// ➞ "cat"
// ➞ "burglar"
// ➞ "embezzlement"

// 22
// 24
// 27
// 28
// 29
// 30