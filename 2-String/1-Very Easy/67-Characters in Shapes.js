function countCharacters(str) {
    let a = [];
    for (let i = 0; i < str.length; i++) {
        a += str[i]
    }
    return a.length
}
console.log(countCharacters(["###", "###", "###"]));
console.log(countCharacters(["22222222", "22222222",]));
console.log(countCharacters(["------------------"]));
console.log(countCharacters([]));
console.log(countCharacters(["", ""]));
//   ➞ 9
//   ➞ 16
//   ➞ 18
//   ➞ 0
//   ➞ 0