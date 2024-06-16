// Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy(...arr) {
    // return arr.every((item) => Boolean(item))
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== true) {
            return false
        }
    }
    return true
}
console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
console.log(allTruthy(5, 4, 3, 2, 1, 0));
// ➞ true
// ➞ false
// ➞ false

// Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
// You will always be supplied with at least one parameter.