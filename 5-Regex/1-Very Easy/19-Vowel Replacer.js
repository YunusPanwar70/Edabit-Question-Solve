// Create a function that replaces all the vowels in a string with a specified character.

function replaceVowels(str, char) {
    return str.replace(/[aeiou]/gi, char);
}

console.log(replaceVowels("the aardvark", "#"));
console.log(replaceVowels("minnie mouse", "?"));
console.log(replaceVowels("shakespeare", "*"));

// ➞ "th# ##rdv#rk"
// ➞ "m?nn?? m??s?"
// ➞ "sh*k*sp**r*"

// Notes
// All characters will be in lower case.