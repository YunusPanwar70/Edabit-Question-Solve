// Create a function that counts the number of towers.

function count_towers(arr) {
    let value = arr.flat(Infinity)
    let count = 0;
    for (let i = 0; i < value.length; i++) {
        if (arr[i] === ' ') {
            count++
        }
    }
    return count
}
console.log(count_towers([
    ["     ##         "],
    ["##   ##        ##"],
    ["##   ##   ##   ##"],
    ["##   ##   ##   ##"]
])); // ➞ 4

console.log(count_towers([
    ["                         ##"],
    ["##             ##   ##   ##"],
    ["##        ##   ##   ##   ##"],
    ["##   ##   ##   ##   ##   ##"]
])); // ➞ 6

console.log(count_towers([
    ["##"],
    ["##"]
])); // ➞ 1

// Notes
// You are given a 2D matrix.
// Towers are two characters in length.
// Towers are made only of the character #.
// Some tests have no towers, return 0.