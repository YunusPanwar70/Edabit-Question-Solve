function isPlural(str) {
    return str.endsWith('s');
}

console.log(isPlural("changes"));
console.log(isPlural("change"));
console.log(isPlural("dudes"));
console.log(isPlural("magic"));



// ➞ true
// ➞ false
// ➞ true
// ➞ false