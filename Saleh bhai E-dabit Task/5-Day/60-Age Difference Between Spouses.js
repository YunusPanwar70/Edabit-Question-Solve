function ageDifference(arr) {
    let age = arr.sort((a, b) => a - b);
    if (age <= 6) {
        return `${age} year`
    } else {
        return "No age difference between spouses."
    }
}
console.log(ageDifference([29, 1, 6, 8, 28]));
console.log(ageDifference([43, 86, 49, 86]));
console.log(ageDifference([2, 4, 6, 32, 27]));
// ➞ "1 year"
// ➞ "No age difference between spouses."
// ➞ "5 years"