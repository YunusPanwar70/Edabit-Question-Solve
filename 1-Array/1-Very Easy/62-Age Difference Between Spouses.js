// Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.

// If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.

function ageDifference(arr) {
    arr.sort((a, b) => a - b);
    let max1 = arr[arr.length - 1]
    let max2 = arr[arr.length - 2]
    return max1 === max2 ? "No age difference between spouses." : max1 - max2 + " year"
}
console.log(ageDifference([29, 1, 6, 8, 28]));
console.log(ageDifference([43, 86, 49, 86]));
console.log(ageDifference([2, 4, 6, 32, 27]));
// ➞ "1 year"
// ➞ "No age difference between spouses."
// ➞ "5 years"

// Notes
// Note the singular "year".
// The younger spouse (if the spouses are not the same age) will be older than their oldest child by a minimum of 20 years.
// The age difference between spouses will not be more than 18 years.