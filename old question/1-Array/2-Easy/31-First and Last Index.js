// Given a word, write a function that returns the first index and the last index of a character.
function charIndex(arr1, arr2) {
    let firstIndex = arr1.indexOf(arr2)
    let lastIndex = arr1.lastIndexOf(arr2)
    return [firstIndex, lastIndex]
}
console.log(charIndex("hello", "l"));
console.log(charIndex("circumlocution", "c"));
console.log(charIndex("happy", "h"));
console.log(charIndex("happy", "e"));
// ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
// ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.
// ➞ [0, 0]
// Only one "h" exists, so the first and last index is 0.
// ➞ undefined
// "e" does not exist in "happy", so we return undefined.