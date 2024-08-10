// Write a function that converts an object into an array of keys and values.

// function objectToArray(obj) {
//     return Object.entries(obj)
// }

function objectToArray(obj) {
    let result = [];
    for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
            result.push([i, obj[i]])
        }
    }
    return result
}
console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
}));

console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
}));

// ➞ [["D", 1], ["B", 2], ["C", 3]]
// ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

// Notes
// N/A