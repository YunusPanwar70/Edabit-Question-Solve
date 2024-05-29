// Create a function that takes a string and returns the concatenated first and last character.
function firstLast(str) {
    let firstValue = str.slice(0, 1);
    let lastValue = str.slice(-1);
    return firstValue + lastValue
}
console.log(firstLast("ganesh"));
console.log(firstLast("kali"));
console.log(firstLast("shiva"));
console.log(firstLast("vishnu"));
console.log(firstLast("durga"));
// ➞ "gh"
// ➞ "ki"
// ➞ "sa"
// ➞ "vu"
// ➞ "da"