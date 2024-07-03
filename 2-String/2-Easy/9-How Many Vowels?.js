// Create a function that takes a string and returns the number (count) of vowels contained within it.

// function countVowels(str) {
//     let vowels = 'aeiou';
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++
//         }
//     }
//     return count
// }

function countVowels(str) {
    let vowels = 'aeiou';
    let count = 0;
    let i = 0;
    while (i < str.length) {
        if (vowels.includes(str[i])) {
            count++
        }
        i++
    }
    return count
}
console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));
console.log(countVowels("Prediction"));
// ➞ 5
// ➞ 1
// ➞ 4