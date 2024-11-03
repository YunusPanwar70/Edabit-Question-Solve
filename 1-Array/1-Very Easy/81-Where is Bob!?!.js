// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

// function findBob(arr) {
//     let findchar = 'Bob';
//     return arr.indexOf(findchar)
// }

// function findBob(arr) {
//     let findchar = 'Bob';
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === findchar) {
//             return i
//         }
//     }
//     return -1
// }

function findBob(arr) {
    let findchar = 'Bob';
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === findchar) {
            return i
        }
        i++
    }
    return -1
}
console.log(findBob(["Jimmy", "Layla", "Bob"]));
console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]));
console.log(findBob(["Jimmy", "Layla", "James"]));
// ➞ 2
// ➞ 0
// ➞ -1

// Notes
// Assume all names start with a capital letter and are lowercase thereafter (i.e. don't worry about finding "BOB" or "bob").