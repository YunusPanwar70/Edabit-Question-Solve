// Write a function to reverse an array.

// function reverse(arr) {
//     return arr.reverse()
// }

// function reverse(arr) {
//     let result = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result.push(arr[i])
//     }
//     return result
// }

// function reverse(arr) {
//     let result = [];
//     let i = arr.length - 1;
//     while (i >= 0) {
//         result.push(arr[i])
//         i--
//     }
//     return result
// }

function reverse(arr) {
    // return arr.reduce((acc, curr) => [curr, ...acc],[]);
    return arr.reduce((acc, curr) => {
        acc.unshift(curr)
        return acc
    }, []);
}
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([]));
// ➞ [4, 3, 2, 1]
// ➞ [4, 3, 2, 9, 9]
// ➞ []

// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.