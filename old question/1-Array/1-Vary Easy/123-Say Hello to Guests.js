// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

function greetPeople(arr) {
    return arr.map(name => `Hello ${name}`).join(', ');
}
console.log(greetPeople(["Joe"]));
console.log(greetPeople(["Angela", "Joe"]));
console.log(greetPeople(["Frank", "Angela", "Joe"]));
// ➞ "Hello Joe"
// ➞ "Hello Angela, Hello Joe"
// ➞ "Hello Frank, Hello Angela, Hello Joe"