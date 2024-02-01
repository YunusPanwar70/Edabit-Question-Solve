function arraySum(nums) {
    let sum = nums
        .map(num => (num % 2 === 0 ? num ** 2 : Math.sqrt(num)))
        .reduce((acc, value) => acc + value, 0);

    return parseFloat(sum.toFixed(2));
}

console.log(arraySum([1, 3, 3, 1, 10]));
console.log(arraySum([2, 3, 4, 5]));
console.log(arraySum([1, 31, 3, 11, 0]));


// ➞ 105.46
//  ➞ 23.97
// ➞ 11.62