// Write a function that removes any non-letters from a string, returning a well-known film title.

function lettersOnly(str) {
    return str.replace(/[^A-Za-z]/g, "");
}
console.log(lettersOnly("R!=:~0o0./c&}9k`60=y"));
console.log(lettersOnly("^,]%4B|@56a![0{2m>b1&4i4"));
console.log(lettersOnly("^U)6$22>8p)."));
// ➞ "Rocky"
// ➞ "Bambi"
// ➞ "Up"

// Notes
// See the Resources section for more information on JavaScript string methods.