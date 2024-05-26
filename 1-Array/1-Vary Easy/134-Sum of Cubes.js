// Create a function that takes in an array of numbers and returns the sum of its cubes.
function sumOfCubes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3)
    }
    return sum
}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([3, 4, 5]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));
// ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// ➞ 216
// ➞ 8
// ➞ 0