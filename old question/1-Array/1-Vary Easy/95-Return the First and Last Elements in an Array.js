function firstLast(arr) {
    return [arr[0], arr[arr.length - 1]]
}
console.log(firstLast([5, 10, 15, 20, 25]));
console.log(firstLast(["edabit", 13, null, false, true]));
console.log(firstLast([undefined, 4, "6", "hello", null]));
// ➞ [5, 25]
// ➞ ["edabit", true]
// ➞ [undefined, null]