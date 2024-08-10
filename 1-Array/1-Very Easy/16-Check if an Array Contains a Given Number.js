// Write a function to check if an array contains a particular number.

// function check(arr, n) {
//     return arr.includes(n)
// }

// function check(arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             return true
//         }
//     }
//     return false
// }

// function check(arr, n) {
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[i] === n) {
//             return true
//         }
//         i++
//     }
//     return false
// }

// function check(arr, n) {
//     for (const i in arr) {
//         if (arr[i] === n) {
//             return true
//         }
//     }
//     return false
// }

// function check(arr, n) {
//     for (const i of arr) {
//         if (i === n) {
//             return true
//         }
//     }
//     return false
// }

function check(arr, n) {
    let found = false;
    arr.forEach(element => {
        if (element === n) {
            found = true
        }
    });
    return found
}
console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));
// ➞ true
// ➞ false
// ➞ true
// ➞ false

// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.