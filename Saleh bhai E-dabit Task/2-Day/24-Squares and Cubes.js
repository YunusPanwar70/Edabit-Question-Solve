function checkSquareAndCube(arr) {
    const [num1, num2] = arr;
    const square1 = Math.sqrt(num1)
    const square2 = Math.cbrt(num2)
    return square1 === square2
}
console.log(checkSquareAndCube([4, 8]));
console.log(checkSquareAndCube([16, 48]));
console.log(checkSquareAndCube([9, 27]));
// ➞ true
// ➞ false
// ➞ true