// Given two strings, create a function that returns the total number of unique characters from the combined string.

function countUnique(s1, s2) {
    let combined = s1 + s2;
    let uniqueChars = new Set(combined);
    return uniqueChars.size;

}
console.log(countUnique("apple", "play"));
console.log(countUnique("sore", "zebra"));
console.log(countUnique("a", "soup"));
// ➞ 5
// "appleplay" has 5 unique characters:
// "a", "e", "l", "p", "y"
// ➞ 7
// "sorezebra" has 7 unique characters:
// "a", "b", "e", "o", "r", "s", "z"
// ➞ 5