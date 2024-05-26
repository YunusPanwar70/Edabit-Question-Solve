// Create a function to count the number of 1s in a 2D array.
function countOnes(arr) {
    let a = arr.flat(Infinity).filter((item) => item === 1)
    return a.length
}
console.log(countOnes([
    [1, 0],
    [0, 0]]));

console.log(countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]]));

console.log(countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33]]));
// ➞ 1
// ➞ 7
// ➞ 2