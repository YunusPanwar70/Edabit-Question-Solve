const scores = {
    "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
    "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
    "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
    "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23
};

function nameScore(name) {
    // Calculate the total score
    const totalScore = name.toUpperCase().split('').reduce((acc, curr) => acc + (scores[curr] || 0), 0);

    // Determine the evaluation based on the total score
    if (totalScore <= 60) {
        return "NOT TOO GOOD";
    } else if (totalScore <= 300) {
        return "PRETTY GOOD";
    } else if (totalScore <= 599) {
        return "VERY GOOD";
    } else {
        return "THE BEST";
    }
}

// Examples
console.log(nameScore("MUBASHIR")); // ➞ "THE BEST"
console.log(nameScore("YOU")); // ➞ "VERY GOOD"
console.log(nameScore("MATT")); // ➞ "THE BEST"
console.log(nameScore("PUBG")); // ➞ "NOT TOO GOOD"