function forbiddenLetter(char, arr) {
    return arr.every((word) => !word.includes(char))
    // return !arr.some((word) => word.includes(char))
}
console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));
console.log(forbiddenLetter("m", []));
// ➞ false
// ➞ true
// ➞ true