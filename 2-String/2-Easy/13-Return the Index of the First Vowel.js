// Create a function that returns the index of the first vowel in a string.

function firstVowel(str) {
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return i
        }
    }
    return -1
}
console.log(firstVowel("apple"));
console.log(firstVowel("hello"));
console.log(firstVowel("STRAWBERRY"));
console.log(firstVowel("pInEaPPLe"));
// ➞ 0
// ➞ 1
// ➞ 3
// ➞ 1