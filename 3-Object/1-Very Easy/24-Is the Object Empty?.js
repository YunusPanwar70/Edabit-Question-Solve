// Write a function that returns true if an object is empty, and false otherwise.

// function isEmpty(obj) {
//     return Object.keys(obj).length === 0
// }

// function isEmpty(obj) {
//     return Object.values(obj).length === 0
// }

// function isEmpty(obj) {
//     return Object.entries(obj).length === 0
// }

function isEmpty(obj) {
    for (const i in obj) {
        return false
    }
    return true
}
console.log(isEmpty({}));
console.log(isEmpty({ a: 1 }));
// ➞ true
// ➞ false