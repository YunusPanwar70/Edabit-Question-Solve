function sortByLength(arr) {
    arr.sort((a, b) => a.length - b.length)
    return arr
}

console.log(sortByLength(["Google", "Apple", "Microsoft"]));
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
console.log(sortByLength(["Turing", "Einstein", "Jung"]));


// ➞ ["Apple", "Google", "Microsoft"]
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// ➞ ["Jung", "Turing", "Einstein"]