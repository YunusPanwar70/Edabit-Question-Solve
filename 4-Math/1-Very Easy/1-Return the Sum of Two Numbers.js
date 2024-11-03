// Create a function that takes two numbers as arguments and returns their sum.

// function addition(a, b) {
//     return a + b
// }
function addition(a, b) {
    if (a.length !== b.length) {
        throw new Error('Arrays must be of the same length');
    }
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i] + b[i];
    }
    return sum;
}
console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));
// ➞ 5
// ➞ -9
// ➞ 10

// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.