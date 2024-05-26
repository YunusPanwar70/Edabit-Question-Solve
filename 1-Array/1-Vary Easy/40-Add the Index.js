function addIndexes(arr) {
    // return arr.map((item, val) => item + val)

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + i)
    }
    return result
}
console.log(addIndexes([0, 0, 0, 0, 0]));
console.log(addIndexes([1, 2, 3, 4, 5]));
console.log(addIndexes([5, 4, 3, 2, 1]));
// ➞ [0, 1, 2, 3, 4]
// ➞ [1, 3, 5, 7, 9]
// ➞ [5, 5, 5, 5, 5]