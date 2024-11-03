// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// function birthdayCakeCandles(candles) {
//     let maxHeigth = Math.max(...candles);
//     return candles.filter((candle) => candle === maxHeigth).length
// }

function birthdayCakeCandles(candles) {
    let max = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > max) {
            max = candles[i]
        }
    }
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === max) {
            count++
        }
    }
    return count
}
console.log(birthdayCakeCandles([4, 4, 1, 3]));
console.log(birthdayCakeCandles([3, 2, 1, 3]));
console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]));

// ➞ 2
// The maximum height candles are four units high.
// There are two of them, so you return 2.
// ➞ 2
// ➞ 4