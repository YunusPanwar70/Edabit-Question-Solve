// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// function keysAndValues(obj) {
//     let keys = Object.keys(obj)
//     let values = Object.values(obj)
//     return [keys, values]
// }

function keysAndValues(obj) {
    return Object.entries(obj)
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// ➞ [["a", "b", "c"], [1, 2, 3]]
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

// Notes
// Remember to sort the keys.