// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
function isPlural(str) {
    return str.endsWith("s");
};
console.log(isPlural("changes"));
console.log(isPlural("change"));
console.log(isPlural("dudes"));
console.log(isPlural("magic"));
// ➞ true
// ➞ false
// ➞ true
// ➞ false