// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

function mapping(obj) {
    return Object.entries(obj)
}
console.log(mapping(["p", "s"]));
console.log(mapping(["a", "b", "c"]));
console.log(mapping(["a", "v", "y", "z"]));
// ➞ { "p": "P", "s": "S" }
// ➞ { "a": "A", "b": "B", "c": "C" }
// ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }