function cleanUpArray(arr) {
    const numbers = arr.map((item) => Number(item))
    const even = numbers.filter((number) => number % 2 === 0)
    const odd = numbers.filter((number) => number % 2 !== 0)
    return [even, odd]
}
console.log(cleanUpArray(["8"]));
console.log(cleanUpArray(["11"]));
console.log(cleanUpArray(["7", "4", "8"]));
console.log(cleanUpArray(["9", "4", "5", "8"]));
// ➞ [[8], []]
// ➞ [[], [11]]
// ➞ [[4, 8], [7]]
// ➞ [[4, 8], [9, 5]]