// A baseball player's batting average is calculated by the following formula:

// BA = (number of hits) / (number of official at-bats)
// Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

// Ty Cobb .366
// Rogers Hornsby .358
// Shoeless Joe Jackson .356
// The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

function battingAvg(arr) {
    
}
console.log(battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]]));
console.log(battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]]));
console.log(battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]]));
// ➞ ".286"
// ➞ ".350"
// ➞ ".273"