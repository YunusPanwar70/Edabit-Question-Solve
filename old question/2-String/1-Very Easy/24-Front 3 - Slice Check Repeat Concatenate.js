// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.
function frontThree(str) {
    let a = str.substring(0, 2)
    return a.repeat(3)
}
console.log(frontThree("Python"));
console.log(frontThree("Cucumber"));
console.log(frontThree("bioshock"));
// ➞ "PytPytPyt"
// ➞ "CucCucCuc"
// ➞ "biobiobio"