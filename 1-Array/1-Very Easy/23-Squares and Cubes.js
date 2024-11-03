// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

function checkSquareAndCube(arr) {
    let [one, two] = arr;
    let square = Math.sqrt(one);
    let cube = Math.cbrt(two);
    return square === cube
}
console.log(checkSquareAndCube([4, 8]));
console.log(checkSquareAndCube([16, 48]));
console.log(checkSquareAndCube([9, 27]));

// ➞ true
// ➞ false
// ➞ true


// Notes
// Remember to return either true or false.
// All arrays contain two positive numbers.
// If you're stuck, check the Resources for a hint.