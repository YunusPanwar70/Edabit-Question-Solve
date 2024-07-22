// Write a function that returns the string "something" joined with a space " " and the given argument a.

// function giveMeSomething(str) {
//     let val = 'something ';
//     return val.concat(str)
// }
function giveMeSomething(str) {
    return `something ${str}`
}
console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));
// ➞ "something is better than nothing"
// ➞ "something Bob Jane"
// ➞ "something something"