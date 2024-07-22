// Write a function that inverts the keys and values of an object.

function invert(obj) {
    const invertedEntries = Object.entries(obj).map(([key, value]) => [value, key]);
    return Object.fromEntries(invertedEntries);
}
console.log(invert({ "z": "q", "w": "f" }));
console.log(invert({ "a": 1, "b": 2, "c": 3 }));
console.log(invert({ "zebra": "koala", "horse": "camel" }));
// ➞ { "q": "z", "f": "w" }
// ➞ { 1: "a", 2: "b", 3: "c" }
// ➞ { "koala": "zebra", "camel": "horse" }