// John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// Create a function which takes in a matrix as input, and return John's score after his game has ended.

function diceGame(arr) {
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
        let round = arr[i];
        if (round[0] === round[1]) {
            return 0;
        }
        score += round[0] + round[1]
    }
    return score
}
console.log(diceGame([[1, 2], [3, 4], [5, 6]]));
console.log(diceGame([[1, 1], [5, 6], [6, 4]]));
console.log(diceGame([[4, 5], [4, 5], [4, 5]]));
// ➞ 21
// ➞ 0
// ➞ 27