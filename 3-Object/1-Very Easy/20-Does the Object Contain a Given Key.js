// Write a function that returns true if a hash contains the specified key, and false otherwise.

// function hasKey(obj, key) {
//     return obj.hasOwnProperty(key)
// }

// function hasKey(obj, key) {
//     return key in obj
// }

// function hasKey(obj, key) {
//     return Object.keys(obj).some((k) => k === key)
// }

// function hasKey(obj, key) {
//     for (const keys in obj) {
//         if (keys === key) {
//             return true
//         }
//     }
//     return false
// }

// function hasKey(obj, key) {
//     let keys = Object.keys(obj)
//     for (let i = 0; i < keys.length; i++) {
//         if (keys[i] === key) {
//             return true
//         }
//     }
//     return false
// }

// function hasKey(obj, key) {
//     let keys = Object.keys(obj);
//     let i = 0;
//     while (i < keys.length) {
//         if (keys[i] === key) {
//             return true
//         }
//         i++;
//     }
//     return false
// }

function hasKey(obj, key) {
    let keys = Object.keys(obj);
    return keys.filter((k) => k === key).length > 0
}
console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));
// ➞ false
// ➞ false
// ➞ true