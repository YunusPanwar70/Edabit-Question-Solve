// Your friend is trying to write a function that removes all vowels from a string. They write:

function removeVowels(str) {
    return str.replace(/[aeiou]/, "");
}
// However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.

console.log(removeVowels("candy"));
console.log(removeVowels("hello"));
console.log(removeVowels("apple"));
// ➞ "cndy"
// ➞ "hllo"
// The "e" is removed, but the "o" is still there!
// ➞ "pple"

// Notes
// All letters will be lowercase.