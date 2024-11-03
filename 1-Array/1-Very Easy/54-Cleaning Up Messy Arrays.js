// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// function cleanUpArray(arr) {
//     const numbers = arr.map(Number)
//     const even = numbers.filter((number) => number % 2 === 0);
//     const odd = numbers.filter((number) => number % 2 !== 0);
//     return [even, odd]
// }

function cleanUpArray(arr) {
    const numbers = arr.map(Number);
    let even = [];
    let odd = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even.push(numbers[i])
        } else {
            odd.push(numbers[i])
        }
    }
    return [even, odd]
}
console.log(cleanUpArray(["8"]));
console.log(cleanUpArray(["11"]));
console.log(cleanUpArray(["7", "4", "8"]));
console.log(cleanUpArray(["9", "4", "5", "8"]));
// ➞ [[8], []]
// ➞ [[], [11]]
// ➞ [[4, 8], [7]]
// ➞ [[4, 8], [9, 5]]

// Notes
// All numbers will be positive integers.