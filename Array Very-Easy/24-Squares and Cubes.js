function checkSquareAndCube(arr) {
    const [num1, num2] = arr;
    const sqaure = Math.sqrt(num1);
    const sqaure2 = Math.cbrt(num2);
    return sqaure === sqaure2
}

console.log(checkSquareAndCube([4, 8]));
console.log(checkSquareAndCube([16, 48]));
console.log(checkSquareAndCube([9, 27]));


// ➞ true
// ➞ false
// ➞ true