// Write a function that converts an object into an array of keys and values.

function objectToArray(arr) {
    return Object.entries(arr)

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