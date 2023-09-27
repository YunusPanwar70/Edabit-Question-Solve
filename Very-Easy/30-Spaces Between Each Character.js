function spaceMeOut(str) {
    let a = str.split("");
    let b = a.join(" ");
    return b;
}

console.log(spaceMeOut("space"));
console.log(spaceMeOut("far out"));
console.log(spaceMeOut("elongated musk"));

// ➞ "s p a c e"
// ➞ "f a r   o u t"
// ➞ "e l o n g a t e d   m u s k"