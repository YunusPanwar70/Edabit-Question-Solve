function countUppercase(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i].length; j++) {
            if (str[i][j] === str[i][j].toUpperCase()) {
                count++
            }
        }
    }
    return count
}

console.log(countUppercase(["SOLO", "hello", "Tea", "wHat"]));
console.log(countUppercase(["little", "lower", "down"]));
console.log(countUppercase(["EDAbit", "Educate", "Coding"]));


// ➞ 6
// ➞ 0
// ➞ 5