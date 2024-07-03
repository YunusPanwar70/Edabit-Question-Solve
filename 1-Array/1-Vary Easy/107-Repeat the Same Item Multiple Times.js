// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

function repeat(item, times) {
    let result = [];
    for (let i = 0; i < times; i++) {
        result.push(item)
    }
    return result
}
console.log(repeat("edabit", 3));
console.log(repeat(13, 5));
console.log(repeat("7", 2));
console.log(repeat(0, 0));
// ➞ ["edabit", "edabit", "edabit"]
// ➞ [13, 13, 13, 13, 13]
// ➞ ["7", "7"]
// ➞ []