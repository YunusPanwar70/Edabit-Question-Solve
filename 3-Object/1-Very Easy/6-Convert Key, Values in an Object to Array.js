// Write a function that converts an object into an array of keys and values.

// function objectToArray(arr) {
//     return Object.entries(arr)
// }

// function objectToArray(obj) {
//     let result = [];
//     for (const i in obj) {
//         result.push(i, obj[i])
//     }
//     return result
// }

function objectToArray(obj) {
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    let result = [];
    for (let i = 0; i < keys.length; i++) {
        result.push([keys[i], values[i]]);
    }
    return result;
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
//  ➞ [["D", 1], ["B", 2], ["C", 3]]
//  ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]