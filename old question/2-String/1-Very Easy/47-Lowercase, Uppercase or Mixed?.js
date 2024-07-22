// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

function getCase(str) {
    if (str === str.toLowerCase()) {
        return 'lower'
    } else if (str === str.toUpperCase()) {
        return 'upper'
    } else if (str === str) {
        return 'mixed'
    }
}
console.log(getCase("whisper..."));
console.log(getCase("SHOUT!"));
console.log(getCase("Indoor Voice"));
// ➞ "lower"
// ➞ "upper"
// ➞ "mixed"