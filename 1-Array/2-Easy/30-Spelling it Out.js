// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
function spelling(str) {
    return str.substring(0, 1) && str.substring(0, 2)
}
console.log(spelling("bee"));
console.log(spelling("happy"));
console.log(spelling("eagerly"));
// ➞ ["b", "be", "bee"]
// ➞ ["h", "ha", "hap", "happ", "happy"]
// ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]