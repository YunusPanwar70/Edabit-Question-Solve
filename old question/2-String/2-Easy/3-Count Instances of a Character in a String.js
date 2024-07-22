// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// function charCount(char, str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++
//         }
//     }
//     return count
// }

function charCount(char, str) {
    let count = 0;
    let i = 0;
    while (i < str.length) {
        if (char === str[i]) {
            count++
        }
        i++
    }
    return count
}
console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));
// ➞ 1
// ➞ 1
// ➞ 4