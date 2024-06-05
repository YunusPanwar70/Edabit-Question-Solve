// Create a function that adds a string ending to each member in an array.

function addEnding(str, char) {
    return str.map((item) => item.concat(char))
}
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
console.log(addEnding(["new", "pander", "scoop"], "er"));
console.log(addEnding(["bend", "sharpen", "mean"], "ing"));
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// ➞ ["newer", "panderer", "scooper"]
// ➞ ["bending", "sharpening", "meaning"]