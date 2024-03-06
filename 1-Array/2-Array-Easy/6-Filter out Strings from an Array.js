function filterArray(arr) {
    return arr.filter((num) => typeof num === "number")
}

console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));


// ➞ [1, 2]
// ➞ [1, 0, 15]
// ➞ [1, 2, 123]