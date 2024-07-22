// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// function isPlural(str) {
//     return str.endsWith("s");
// };

function isPlural(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 's') {
            return true
        }
    }
    return false
}
console.log(isPlural("changes"));
console.log(isPlural("change"));
console.log(isPlural("dudes"));
console.log(isPlural("magic"));
// ➞ true
// ➞ false
// ➞ true
// ➞ false