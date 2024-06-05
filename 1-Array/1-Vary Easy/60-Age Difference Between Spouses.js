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