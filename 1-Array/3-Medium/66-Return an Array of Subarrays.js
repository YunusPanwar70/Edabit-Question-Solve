// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

// x Number of subarrays contained within the main array.
// y Number of items contained within each subarray.
// z Item contained within each subarray.

function matrix(x, y, z) {
    let result = [];
    for (let i = 0; i < x; i++) {
        let subarray = [];
        for (let j = 0; j < y; j++) {
            subarray.push(z)
        }
        result.push(subarray)
    }
    return result
}
console.log(matrix(3, 2, 3));
console.log(matrix(2, 1, "edabit"));
console.log(matrix(3, 2, 0));
// ➞ [[3, 3], [3, 3], [3, 3]]
// ➞ [["edabit"], ["edabit"]]
// ➞ [[0, 0], [0, 0], [0, 0]]