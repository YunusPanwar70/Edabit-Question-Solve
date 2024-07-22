// Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.

// Given that:
//   - "A" char code is: 65
//   - "a" char code is: 97
function counterpartCharCode(char) {
    let lowerChar = char.toLowerCase();
    if (lowerChar === char) {
        return char.toUpperCase().charCodeAt(0);
    } else {
        return char.toLowerCase().charCodeAt(0);
    }
}
console.log(counterpartCharCode("A"));
console.log(counterpartCharCode("a"));
// ➞ 97
// ➞ 65