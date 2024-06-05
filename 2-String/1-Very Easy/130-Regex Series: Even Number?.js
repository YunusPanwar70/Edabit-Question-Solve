// Write a regular expression that matches only an even number. Numbers will be presented as strings.

function evenFind(n) {
    const num = parseInt(n);
    return num % 2 === 0
}
console.log(evenFind("2341"));
console.log(evenFind("132"));
console.log(evenFind("29"));
console.log(evenFind("5578"));
// ➞ false
// ➞ true
// ➞ false
// ➞ true