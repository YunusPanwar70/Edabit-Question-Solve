// Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

// function longBurp(num) {
//     return `Bu${'r'.repeat(num)}p`
// }
function longBurp(num) {
    let result = 'Bu';
    for (let i = 0; i < num; i++) {
        result += 'r'
    }
    result += 'p'
    return result
}
console.log(longBurp(3));
console.log(longBurp(5));
console.log(longBurp(9));
// ➞ "Burrrp"
// ➞ "Burrrrrp"
// ➞ "Burrrrrrrrrp"