// Create a function that counts how many D's are in a sentence.

function countDs(str) {
    let regEx = /[d]/gi;
    return str.match(regEx).length
}
console.log(countDs("My friend Dylan got distracted in school."));
console.log(countDs("Debris was scattered all over the yard."));
console.log(countDs("The rodents hibernated in their den."));
// ➞ 4
// ➞ 3
// ➞ 3

// Notes
// Your function must be case-insensitive.
// Remember to return the result.
// Check the Resources for help.