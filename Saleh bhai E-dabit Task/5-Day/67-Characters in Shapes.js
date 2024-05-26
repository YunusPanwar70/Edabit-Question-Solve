function countCharacters(str) {
    return str.length
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