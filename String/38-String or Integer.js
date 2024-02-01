function intOrString(str) {
    if (typeof str === 'number') {
        return "int"
    } else if (typeof str === 'string') {
        return "str"
    }
}

console.log(intOrString(8));
console.log(intOrString("Hello"));
console.log(intOrString(9843532));

// ➞ "int"
// ➞ "str"
// ➞ "int"