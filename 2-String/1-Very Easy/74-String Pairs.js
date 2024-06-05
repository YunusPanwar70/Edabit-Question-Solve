// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.
// See the below examples for a better understanding:

function stringPairs(str) {
    if (str.length % 2 !== 0) {
        str += "*"
    }
    let result = [];
    for (let i = 0; i < str.length; i += 2) {
        result.push(str[i] + str[i + 1])
    }
    return result
}
console.log(stringPairs("mubashir"));
console.log(stringPairs("edabit"));
console.log(stringPairs("airforces"));
// ➞ ["mu", "ba", "sh", "ir"]
// ➞ ["ed", "ab", "it"]
// ➞ ["ai", "rf", "or", "ce", "s*"]