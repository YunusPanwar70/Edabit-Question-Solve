// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.


// [2, 4, 9]  ➞ 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
function arraySum(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            sum += Math.pow(nums[i], 2)
        } else {
            sum += Math.sqrt(nums[i])
        }
    }
    return sum.toFixed(2)
}
console.log(arraySum([1, 3, 3, 1, 10]));
console.log(arraySum([2, 3, 4, 5]));
console.log(arraySum([1, 31, 3, 11, 0]));
// ➞ 105.46
// ➞ 23.97
// ➞ 11.62

// Notes
// No empty array in Tests.
// Each array element ≥ 0.