// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

function howManyTimes(str) {
    let word = 'Edabit';
    let repeatValue = 'a'.repeat(str)
    return word.replace('a', repeatValue)
}
console.log(howManyTimes(5));
console.log(howManyTimes(0));
console.log(howManyTimes(12));
// ➞ "Edaaaaabit"
// ➞ "Edbit"
// ➞ "Edaaaaaaaaaaaabit"