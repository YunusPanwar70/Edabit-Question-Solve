function toArray(arr) {
    return Object.entries(arr)
}
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));

// ➞ [["a", 1], ["b", 2]]
// ➞ [["shrimp", 15], ["tots", 12]]
// ➞ []