// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

function checkSquareAndCube(arr) {
    let [num1, num2] = arr;
    let squar = Math.sqrt(num1);
    let cube = Math.cbrt(num2)
    return squar === cube
}
console.log(checkSquareAndCube([4, 8]));
console.log(checkSquareAndCube([16, 48]));
console.log(checkSquareAndCube([9, 27]));
// ➞ true
// ➞ false
// ➞ true