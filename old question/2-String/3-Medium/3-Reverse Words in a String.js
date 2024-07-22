// Given an input string, reverse the string word by word, the first word will be the last, and so on.

// function reverseWords(str) {
//     let trimVal = str.trim()
//     let val = '';
//     for (let i = trimVal.length - 1; i >= 0; i--) {
//         val += trimVal[i]
//     }
//     return val
// }

function reverseWords(str) {
    return str.trim(str).split(' ').reverse().join(' ')
}
console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  "));
console.log(reverseWords("a good example"));
// ➞ "blue is sky the"
// ➞ "world! hello"
// ➞ "example good a"