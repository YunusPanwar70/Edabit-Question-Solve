function forbiddenLetter(str1, str2) {
    let a = str1.includes(str2)
    return a

}

console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));
console.log(forbiddenLetter("m", []));



// ➞ false
// ➞ true
// ➞ true