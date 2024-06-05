// Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastName) {
    return `"${lastName} ${firstName}"`
}
// function concatName(firstName, lastName) {
//     let a = lastName + " ";
//     return a.concat(firstName)
// }
console.log(concatName("First", "Last"));
console.log(concatName("John", "Doe"));
console.log(concatName("Mary", "Jane"));
// ➞ "Last, First"
// ➞ "Doe, John"
// ➞ "Jane, Mary"