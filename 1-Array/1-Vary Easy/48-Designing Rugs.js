// Designing Rugs
// Write a function that accepts the width and height(m, n) and an optional proc s and generates an array with m elements.Each element is a string consisting of either:

// The default character(hash #) repeating n times(if no proc is given).
// The character passed in through the proc repeating n times.
function makeRug(m, n, s = '#') {
    const result = [];
    const row = s.repeat(n)
    for (let i = 0; i < m; i++) {
        result.push(row)
    }
    return row
}
console.log(makeRug(3, 5));
console.log(makeRug(3, 5, '$'));
console.log(makeRug(2, 2, 'A'));
// ➞ [
// "#####",
// "#####",
// "#####"
// ]
//  ➞ ["$$$$$","$$$$$","$$$$$"]
//  ➞ ["AA","AA"]