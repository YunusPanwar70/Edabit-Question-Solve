// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

// The string must contain an @ character.
// The string must contain a . character.
// The @ must have at least one character in front of it.
// e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
// The . and the @ must be in the appropriate places.
// e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
// If the string passes these tests, it's considered a valid email address.

function validateEmail(str) {
    
}
console.log(validateEmail("@gmail.com"));
console.log(validateEmail("hello.gmail@com"));
console.log(validateEmail("gmail"));
console.log(validateEmail("hello@gmail"));
console.log(validateEmail("hello@edabit.com"));
// ➞ false
// ➞ false
// ➞ false
// ➞ false
// ➞ true

// Notes
// Check the Tests tab to see exactly what's being evaluated.
// You can solve this challenge with RegEx, but it's intended to be solved with logic.
// Solutions using RegEx will be accepted but frowned upon :(