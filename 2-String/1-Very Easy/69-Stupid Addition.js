// Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.
function stupidAddition(n1, n2) {
    if (typeof (n1) === 'number' && typeof (n2) === 'number') {
        return String(n1) + String(n2)
    } else if (typeof (n1) === 'string' && typeof (n2) === 'string') {
        return parseInt(n1) + parseInt(n2)
    } else {
        return null
    }
}
console.log(stupidAddition(1, 2));
console.log(stupidAddition("1", "2"));
console.log(stupidAddition("1", 2));
// ➞ "12"
// ➞ 3
// ➞ null