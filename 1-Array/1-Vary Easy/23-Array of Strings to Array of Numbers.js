function toNumberArray(arr) {
    // return arr.map(Number)
    return arr.map((item) => Number(item))
}
console.log(toNumberArray(["9.4", "4.2"]));
console.log(toNumberArray(["91", "44"]));
console.log(toNumberArray(["9.5", "8.8"]));
// ➞ [9.4, 4.2]
// ➞ [91, 44]
// ➞ [9.5, 8.8]