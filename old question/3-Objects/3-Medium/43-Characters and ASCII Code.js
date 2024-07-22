// Write a function that transforms an array of characters into an array of objects, where:

// The keys are the characters themselves.
// The values are the ASCII codes of those characters.

function toObj(arr) {
    return arr.map(char => {
        let obj = {};
        obj[char] = char.charCodeAt(0);
        return obj;
    });
}
console.log(toObj(["a", "b", "c"]));
console.log(toObj(["z"]));
console.log(toObj([]));


// ➞ [{a: 97}, {b: 98}, {c: 99}]
// ➞ [{z: 122}]
// ➞ []