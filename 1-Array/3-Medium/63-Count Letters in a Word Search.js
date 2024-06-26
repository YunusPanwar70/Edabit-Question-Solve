// Create a function that counts the number of times a particular letter shows up in the word search.

function letterCounter(word, letter) {
    let count = 0;
    let words = word.flat(1)
    for (let i = 0; i < words.length; i++) {
        if (words[i] === letter) {
            count++
        }
    }
    return count
}
console.log(letterCounter([
    ["D", "E", "Y", "H", "A", "D"],
    ["C", "B", "Z", "Y", "J", "K"],
    ["D", "B", "C", "A", "M", "N"],
    ["F", "G", "G", "R", "S", "R"],
    ["V", "X", "H", "A", "S", "S"]
], "D"));
console.log(letterCounter([
    ["D", "E", "Y", "H", "A", "D"],
    ["C", "B", "Z", "Y", "J", "K"],
    ["D", "B", "C", "A", "M", "N"],
    ["F", "G", "G", "R", "S", "R"],
    ["V", "X", "H", "A", "S", "S"]
], "H"));
// ➞ 3
// "D" shows up 3 times: twice in the first row, once in the third row.
// ➞ 2