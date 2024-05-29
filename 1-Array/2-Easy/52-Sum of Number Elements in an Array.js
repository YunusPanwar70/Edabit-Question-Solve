// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.
function numbersSum(arr) {
    return arr.reduce((acc, val) => {
        if (typeof val === 'number') {
            return acc + val
        }
        return acc
    }, 0)
}
console.log(numbersSum([1, 2, "13", "4", "645"]));
console.log(numbersSum([true, false, "123", "75"]));
console.log(numbersSum([1, 2, 3, 4, 5, true]));
// ➞ 3
// ➞ 0
// ➞ 15