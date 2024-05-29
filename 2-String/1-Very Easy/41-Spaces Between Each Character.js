// Create a function that takes a string and returns a string with spaces in between all of the characters.
function spaceMeOut(str) {
    return str.split('').join(' ')
}
console.log(spaceMeOut("space"));
console.log(spaceMeOut("far out"));
console.log(spaceMeOut("elongated musk"));
// ➞ "s p a c e"
// ➞ "f a r   o u t"
// ➞ "e l o n g a t e d   m u s k"