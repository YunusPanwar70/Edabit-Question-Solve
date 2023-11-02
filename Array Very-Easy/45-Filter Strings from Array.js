function filterArray(arr) {
    return arr.filter(Number)
}

console.log(filterArray([1, 2, 3, "a", "b", 4]));
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
console.log(filterArray(["Nothing", "here"]));



// ➞ [1, 2, 3, 4]
// ➞ [0, 1729]
// ➞ []