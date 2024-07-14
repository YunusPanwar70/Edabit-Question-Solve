// function countCharacters(str) {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         result += str[i]
//     }
//     return result.length
// }

function countCharacters(str) {
    let count = 0;
    let i = 0;
    while (i < str.length) {
        count += str[i].length
        i++
    }
    return count
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