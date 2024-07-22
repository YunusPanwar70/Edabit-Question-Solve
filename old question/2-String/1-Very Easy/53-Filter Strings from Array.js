// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(str) {
    return str.filter((item) => Number(item))
}
console.log(filterArray([1, 2, 3, "a", "b", 4]));
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
console.log(filterArray(["Nothing", "here"]));
// ➞ [1, 2, 3, 4]
// ➞ [0, 1729]
// ➞ []