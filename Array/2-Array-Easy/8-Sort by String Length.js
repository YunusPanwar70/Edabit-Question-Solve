function sortByLength(arr) {
    return arr.sort();
};

console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
console.log(sortByLength(["apple", "pie", "shortcake"]));
console.log(sortByLength(["may", "april", "september", "august"]));
console.log(sortByLength([]));


// ➞ ["a", "bb", "ccc", "dddd"]
// ➞ ["pie", "apple", "shortcake"]
// ➞ ["may", "april", "august", "september"]
// ➞ []