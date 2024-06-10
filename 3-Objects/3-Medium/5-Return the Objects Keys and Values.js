// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

function keysAndValues(obj) {
    let key = Object.keys(obj)
    let value = Object.values(obj)
    return [key, value]
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// ➞ [["a", "b", "c"], [1, 2, 3]]
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]