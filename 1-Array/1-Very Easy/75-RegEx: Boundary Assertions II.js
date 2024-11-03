// You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.

function accepted(arr) {
    return arr.filter((item) => !item.startsWith('C'))
}
console.log(accepted(["Ducks", "Bears", "Cats"]));
console.log(accepted(["cars", "trucks", "planes"]));
console.log(accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]));
// ➞ ["Ducks", "Bears"]
// ➞ ["cars", trucks", "planes"]
// ➞ ["Worms", "Bugs", "Beans"]

// Notes
// Use a RegEx boundary assertion in your function.