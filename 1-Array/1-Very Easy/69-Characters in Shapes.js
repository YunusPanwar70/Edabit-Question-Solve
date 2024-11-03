// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

function countCharacters(arr) {
    let count = 0;
    let arrJoins = arr.join('');
    for (let i = 0; i < arrJoins.length; i++) {
        count++
    }
    return count
}
console.log(countCharacters(["###", "###", "###"]));
console.log(countCharacters(["22222222", "22222222",]));
console.log(countCharacters(["------------------"]));
console.log(countCharacters([]));
console.log(countCharacters(["", ""]));
// ➞ 9
// ➞ 16
// ➞ 18
// ➞ 0
// ➞ 0
// Notes
// Return 0 if the given array is empty.