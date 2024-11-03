// Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.

function findFactors(num) {
    let factor = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            factor.push(i)
        }
    }
    return factor
}
console.log(findFactors(9));
console.log(findFactors(12));
console.log(findFactors(20));
console.log(findFactors(0));
// 9 has three factors 1, 3 and 9
// ➞[1, 3, 9]
// ➞[1, 2, 3, 4, 6, 12]
// ➞[1, 2, 4, 5, 10, 20]
// ➞[]
// 0 has no factors

// Notes
// Return an empty array if the given number is less than 1.