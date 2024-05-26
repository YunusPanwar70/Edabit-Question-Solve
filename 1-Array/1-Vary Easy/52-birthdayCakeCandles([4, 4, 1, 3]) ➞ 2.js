function birthdayCakeCandles(arr) {
    const num = arr;
    const max = Math.max(...num)
    return max
}
console.log(birthdayCakeCandles([4, 4, 1, 3]));
console.log(birthdayCakeCandles([3, 2, 1, 3]));
console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]));
// The maximum height candles are four units high.
// There are two of them, so you return 2.
// ➞ 2
// ➞ 2
// ➞ 4