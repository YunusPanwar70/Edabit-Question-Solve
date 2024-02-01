function concatName(str1, str2) {
    return `${str2} ${str1}`
}

console.log(concatName("First", "Last"));
console.log(concatName("John", "Doe"));
console.log(concatName("Mary", "Jane"));


// ➞ "Last, First"
// ➞ "Doe, John"
// ➞ "Jane, Mary"