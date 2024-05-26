function removeEmptyArrays(arr) {
    return arr.flat(1);
}
console.log(removeEmptyArrays(["a", "b", []]));
console.log(removeEmptyArrays([1, 2, [], 4]));
console.log(removeEmptyArrays(["a", "b", []]));
console.log(removeEmptyArrays([1, 2, [], 4]));
// What I want:
// ➞ ["a", "b"]
// ➞ [1, 2, 4]
// What I am getting:
// ➞ ["a", "b", []]
// ➞ [1, 2, [], 4]