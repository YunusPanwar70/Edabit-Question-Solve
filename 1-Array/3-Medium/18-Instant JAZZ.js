// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

function jazzify(arr) {
    return arr.map((item) => item.endsWith('7') ? item : item + '7')
}
console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
console.log(jazzify([]));
// ➞ ["G7", "F7", "C7"]
// ➞ ["Dm7", "G7", "E7", "A7"]
// ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// ➞ []