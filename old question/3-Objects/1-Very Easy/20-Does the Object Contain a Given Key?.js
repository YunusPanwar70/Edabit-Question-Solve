// Write a function that returns true if a hash contains the specified key, and false otherwise.

// function hasKey(obj, char) {
//     return char in obj
// }

function hasKey(obj, char) {
    return obj.hasOwnProperty(char)
}
console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));
// ➞ false
// ➞ false
// ➞ true