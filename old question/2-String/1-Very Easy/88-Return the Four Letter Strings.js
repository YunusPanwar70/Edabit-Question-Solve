// Create a function that takes an array of strings and returns the words that are exactly four letters.

// function isFourLetters(str) {
//     return str.filter((item) => item.length === 4)
// }
function isFourLetters(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].length === 4) {
            result.push(str[i])
        }
    }
    return result
}
console.log(isFourLetters(["Tomato", "Potato", "Pair"]));
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]));
console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]));
// ➞ ["Pair"]
// ➞ ["Bear"]
// ➞ ["Ryan", "Matt"]