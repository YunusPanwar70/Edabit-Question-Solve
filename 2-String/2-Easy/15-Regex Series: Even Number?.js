// Write a regular expression that matches only an even number. Numbers will be presented as strings.

function matchEven(n) {
    const num = parseInt(n);
    return num % 2 === 0
}
console.log(matchEven("2341"));
console.log(matchEven("132"));
console.log(matchEven("29"));
console.log(matchEven("5578"));
// ➞ false
// ➞ true
// ➞ false
// ➞ true