function newWord(str) {
    // return str.substring(1);
    let sum = "";
    for (let i = 1; i < str.length; i++) {
        sum += str[i]
    }
    return sum
}

console.log(newWord("apple"));
console.log(newWord("cherry"));
console.log(newWord("plum"));


// ➞ "pple"
// ➞ "herry"
// ➞ "lum"