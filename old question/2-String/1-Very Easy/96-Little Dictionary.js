// Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.

function dictionary(char, str) {
    return str.filter((item) => item.startsWith(char))
}
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));
// ➞ ["button"]
// ➞ ["triplet", "tries", "trip"]
// ➞ []