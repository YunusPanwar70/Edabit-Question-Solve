// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// function nameString(str) {
//     return `${str}Edabit`
// }

function nameString(str) {
    let fisrtWord = 'Edabit';
    return str.concat(fisrtWord)
}
console.log(nameString("Mubashir"));
console.log(nameString("Matt"));
console.log(nameString("javaScript"));
// ➞ "MubashirEdabit"
// ➞ "MattEdabit"
// ➞ "javaScriptEdabit"