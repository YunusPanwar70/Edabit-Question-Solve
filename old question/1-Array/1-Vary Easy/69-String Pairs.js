function stringPairs(str) {
    let result = [];
    for (let i = 0; i < str.length; i += 2) {
        result.push(str[i])
    }
    return result
}
console.log(stringPairs("mubashir"));
console.log(stringPairs("edabit"));
console.log(stringPairs("airforces"));
// ➞ ["mu", "ba", "sh", "ir"]
// ➞ ["ed", "ab", "it"]
// ➞ ["ai", "rf", "or", "ce", "s*"]