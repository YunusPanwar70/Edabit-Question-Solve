// Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
function stutter(str) {
    let subValue = `${str.substring(0,2)}... `
    let repeatValue = subValue.repeat(2)
    return repeatValue.concat(str)
}
console.log(stutter("incredible"));
console.log(stutter("enthusiastic"));
console.log(stutter("outstanding"));
// ➞ "in... in... incredible?"
// ➞ "en... en... enthusiastic?"
// ➞ "ou... ou... outstanding?"