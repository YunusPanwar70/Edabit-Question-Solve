// Create a function which makes the last character of a string repeat n number of times.

function modifyLast(str, num) {
    let result = str;
    for (let i = 1; i < num; i++) {
        result += str.slice(-1);
    }
    return result
}
console.log(modifyLast("Hello", 3));
console.log(modifyLast("hey", 6));
console.log(modifyLast("excuse me what?", 5));
// ➞ "Hellooo"
// ➞ "heyyyyyy"
// ➞ "excuse me what?????"