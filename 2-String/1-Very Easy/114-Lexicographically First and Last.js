// Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:
// firstAndLast(string) ➞ [first, last]
function firstAndLast(str) {
    let chars = str.split('')

    let first = chars.slice().sort().join('')

    let last = chars.slice().sort().reverse().join('')

    return [first, last]
}
console.log(firstAndLast("marmite"));
console.log(firstAndLast("bench"));
console.log(firstAndLast("scoop"));
// ➞ ["aeimmrt", "trmmiea"]
// ➞ ["bcehn", "nhecb"]
// ➞ ["coops", "spooc"]