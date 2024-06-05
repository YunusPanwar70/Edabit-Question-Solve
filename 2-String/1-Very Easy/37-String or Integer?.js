// Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.

function intOrString(str) {
    if (typeof (str) === 'number') {
        return 'int';
    } else {
        return 'str';
    }
}
console.log(intOrString(8));
console.log(intOrString("Hello"));
console.log(intOrString(9843532));
// ➞ "int"
// ➞ "str"
// ➞ "int"