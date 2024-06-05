// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

function sayHelloBye(str, n) {
    str = str.charAt(0).toUpperCase() + str.slice(1)
    return n === 1 ? `Hello ${str}` : `Bye ${str}`;
}
console.log(sayHelloBye("alon", 1));
console.log(sayHelloBye("Tomi", 0));
console.log(sayHelloBye("jose", 0));
// ➞ "Hello Alon"
// ➞ "Bye Tomi"
// ➞ "Bye Jose"