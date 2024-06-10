// function divisible(arr) {
//     const sum = arr.reduce((acc, cur) => acc * cur)
//     const total = arr.reduce((acc, cur) => acc + cur)
//     return sum % total === 0;
// }
function divisible(arr) {
    let sum = 1;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        sum *= arr[i]
        total += arr[i]
    }
    return sum % total === 0
}
console.log(divisible([3, 2, 4, 2]));
console.log(divisible([4, 2, 6]));
console.log(divisible([3, 5, 1]));
// ➞ false
// ➞ true
// 4 * 2 * 6 / (4 + 2 + 6)
// ➞ false 