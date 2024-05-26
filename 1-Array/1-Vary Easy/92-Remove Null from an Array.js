function removeNull(arr) {
    return arr.filter((item) => item !== null)
}
console.log(removeNull(["a", null, "b", null]));
console.log(removeNull([null, null, null, null, null]));
console.log(removeNull([7, 8, null, 9]));
// ➞ ["a", "b"]
// ➞ []
// ➞ [7, 8, 9]