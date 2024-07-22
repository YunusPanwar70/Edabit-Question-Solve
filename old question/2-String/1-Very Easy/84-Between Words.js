// Write a function that takes three string arguments (first, last, and word) and returns true if word is found between first and last in the dictionary, otherwise false.

function isBetween(first, last, word) {
    return first < word && word < last
}
console.log(isBetween("apple", "banana", "azure"));
console.log(isBetween("monk", "monument", "monkey"));
console.log(isBetween("bookend", "boolean", "boost"));
// ➞ true
// ➞ true
// ➞ false