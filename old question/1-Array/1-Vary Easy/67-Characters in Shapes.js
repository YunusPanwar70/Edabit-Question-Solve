function countCharacters(str) {
    let word = str.join('')
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === '#' || word[i] === '2' || word[i] === '-') {
            count++
        }
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