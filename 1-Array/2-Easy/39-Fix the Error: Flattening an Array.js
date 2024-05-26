// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// function flatten(arr) {
// return arr.flat(1)
// }
// function flatten(arr) {
//     let [val1, val2] = arr;
//     return [...val1, ...val2]
// }
function flatten(arr) {
    return arr.reduce((acc, val) => acc.concat(val), [])
}
console.log(flatten([[1, 2], [3, 4]]));
console.log(flatten([["a", "b"], ["c", "d"]]));
console.log(flatten([[true, false], [false, false]]));
// ➞ []
// Expected: [1, 2, 3, 4]
// ➞ []
// Expected: ["a", "b", "c", "d"]
// ➞ []
// Expected: [true, false, false, false]