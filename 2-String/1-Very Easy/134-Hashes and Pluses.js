// Create a function that returns the number of hashes and pluses in a string.

function hashPlusCount(str) {
    let countHas = 0;
    let coundPlus = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "#") {
            countHas++
        } else if (str[i] === "+") {
            coundPlus++
        }
    }
    return [countHas, coundPlus]
}
console.log(hashPlusCount("###+"));
console.log(hashPlusCount("##+++#"));
console.log(hashPlusCount("#+++#+#++#"));
console.log(hashPlusCount(""));
// ➞ [3, 1]
// ➞ [3, 3]
// ➞ [4, 6]
// ➞ [0, 0]