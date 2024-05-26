// Create a function that takes an array of strings and return an array, sorted from shortest to longest.
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length)
}
console.log(sortByLength(["Google", "Apple", "Microsoft"]));
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
console.log(sortByLength(["Turing", "Einstein", "Jung"]));

// ➞ ["Apple", "Google", "Microsoft"]
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// ➞ ["Jung", "Turing", "Einstein"]