// Write a function that takes an array of numbers and returns an array with two elements:

// The first element should be the sum of all even numbers in the array.
// The second element should be the sum of all odd numbers in the array.

function sumOddAndEven(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            even += arr[i]
        } else if (i % 2 !== 0) {
            odd += arr[i]
        }
    }
    return [odd, even]
}
console.log(sumOddAndEven([1, 2, 3, 4, 5, 6]));
console.log(sumOddAndEven([-1, -2, -3, -4, -5, -6]));
console.log(sumOddAndEven([0, 0]));
// ➞ [12, 9]
// 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9
// ➞ [-12, -9])
// ➞ [0, 0])