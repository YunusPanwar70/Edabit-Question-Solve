function add(char, str) {
    return str.split(' ').join(char);
}

console.log(add("R", "javascript is fun"));
console.log(add("#", "hello world!"));
console.log(add("#", " "));



// ➞ "javascriptRisRfun"
// ➞ "hello#world!"
// ➞ "#"