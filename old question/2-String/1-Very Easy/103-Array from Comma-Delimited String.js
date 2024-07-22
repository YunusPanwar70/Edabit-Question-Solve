// Write a function that turns a comma-delimited list into an array of strings.

function toArray(str) {
    return str.trim(",")
}
console.log(toArray("watermelon, raspberry, orange"));
console.log(toArray("x1, x2, x3, x4, x5"));
console.log(toArray("a, b, c, d"));
console.log(toArray(""));
// ➞ ["watermelon", "raspberry", "orange"]
// ➞ ["x1", "x2", "x3", "x4", "x5"]
// ➞ ["a", "b", "c", "d"]
// ➞ []    