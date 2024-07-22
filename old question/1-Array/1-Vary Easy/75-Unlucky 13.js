// function unlucky13(arr) {
//     return arr.filter((num) => num % 13 !== 0)
// }

function unlucky13(arr) {
    const unluckyNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 13 !== 0) {
            unluckyNumbers.push(arr[i]);
        }
    }
    return unluckyNumbers;
}
console.log(unlucky13([53, 182, 435, 591, 637]));
console.log(unlucky13([24, 316, 393, 458, 1279]));
console.log(unlucky13([104, 351, 455, 806, 871]));
// ➞ [53, 435, 591]
// 182 and 637 are divisible by 13.
// ➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.
// ➞ []
// All numbers in the array are divisible by 13.