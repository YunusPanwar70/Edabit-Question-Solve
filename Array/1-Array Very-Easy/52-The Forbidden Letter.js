function forbiddenLetter(char, arr) {
    if (arr.length === 0) {
        return true
    }
    for (let word of arr) {
        if (word.includes(char)) {
            return true
        }
    }
    return false
}

console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])); // ➞ false
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])); // ➞ true
console.log(forbiddenLetter("m", [])); // ➞ true