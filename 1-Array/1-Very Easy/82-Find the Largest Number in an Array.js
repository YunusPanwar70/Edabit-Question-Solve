// Create a function that takes an array of numbers. Return the largest number in the array.

// function findLargestNum(arr) {
//     return Math.max(...arr)
// }

// function findLargestNum(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) max = arr[i]
//     }
//     return max
// }

function findLargestNum(arr) {
    let max = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > max) max = arr[i]
        i++
    }
    return max
}
console.log(findLargestNum([4, 5, 1, 3]));
console.log(findLargestNum([300, 200, 600, 150]));
console.log(findLargestNum([1000, 1001, 857, 1]));
// ➞ 5
// ➞ 600
// ➞ 1001

// Notes
// Expect either a positive number or zero (there are no negative numbers).
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.