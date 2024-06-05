// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// function charCount(char, str) {
//     return str.split('').filter((item) => item === char).length
// }
function charCount(char, str) {
    let result = 0
    for (let i = 0; i < str.length; i++) {
        if (char === str[i]) {
            result++
        }
    }
    return result
}
console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));
// ➞ 1
// ➞ 1
// ➞ 4