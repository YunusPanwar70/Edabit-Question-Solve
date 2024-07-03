// Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.

function probability(arr, n) {
    let totalCount = arr.length;
    let favorableCount = arr.filter((num) => num >= n).length
    let percentage = (favorableCount / totalCount) * 100;
    return percentage
}
console.log(probability([5, 1, 8, 9], 6));
console.log(probability([7, 4, 17, 14, 12, 3], 16));
console.log(probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6));
// ➞ 50.0
// ➞ 16.7
// ➞ 70.0

// Notes
// Precent probability of event = 100 * (num of favourable outcomes) / (total num of possible outcomes)
// The numbers in the array are uniformly distributed, and have an equal chance of being chosen.