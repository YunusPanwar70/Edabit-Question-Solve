function countUppercase(arr) {
    let str = arr.join("");
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() && str[i] !== ' ') {
            sum++
        }
    }
    return sum
}
console.log(countUppercase(["SOLO", "hello", "Tea", "wHat"]));
console.log(countUppercase(["little", "lower", "down"]));
console.log(countUppercase(["EDAbit", "Educate", "Coding"]));
// ➞ 6
// ➞ 0
// ➞ 5