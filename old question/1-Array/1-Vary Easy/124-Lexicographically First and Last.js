// firstAndLast(string) ➞[first, last]
function firstAndLast(str) {
    let first = str.split('').sort().join('');
    let last = str.split('').sort().reverse().join('');
    return [first, last];
}
console.log(firstAndLast("marmite"));
console.log(firstAndLast("bench"));
console.log(firstAndLast("scoop"));

// ➞ ["aeimmrt", "trmmiea"]
// ➞ ["bcehn", "nhecb"]
// ➞ ["coops", "spooc"]