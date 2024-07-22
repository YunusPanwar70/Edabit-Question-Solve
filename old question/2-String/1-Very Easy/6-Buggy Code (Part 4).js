// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.
// Can you help her?

// function greeting(str){
//     let printWord = 'Hello ';
//     return printWord.concat(str)
// }
function greeting(str) {
    let printWord = `Hello ${str}`
    if (str === 'Mubashir') {
        return 'Hello, my Love!'
    }
    return printWord
}
console.log(greeting("Matt"));
console.log(greeting("Helen"));
console.log(greeting("Mubashir"));
// ➞ "Hello, Matt!"
// ➞ "Hello, Helen!"
// ➞ "Hello, my Love!"