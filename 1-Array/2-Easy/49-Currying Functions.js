// Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.

// Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.


function multiply(arr) {
    return function (factor) {
        return arr.map(num => num * factor);
    };
}
console.log(multiply([1, 2, 3])(2));
console.log(multiply([4, 6, 5])(10));
console.log(multiply([1, 2, 3])(0));
// ➞ [2, 4, 6]
// ➞ [40, 60, 50]
// ➞ [0, 0, 0]