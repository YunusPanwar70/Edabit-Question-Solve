function addEnding(arr, char) {
    return arr.map((val) => val + char)
}
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
console.log(addEnding(["new", "pander", "scoop"], "er"));
console.log(addEnding(["bend", "sharpen", "mean"], "ing"));
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// ➞ ["newer", "panderer", "scooper"]
// ➞ ["bending", "sharpening", "meaning"]