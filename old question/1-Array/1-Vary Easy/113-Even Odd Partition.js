function evenOddPartition(arr) {
    let even = arr.filter((item) => item % 2 === 0)
    let odd = arr.filter((item) => item % 2 !== 0)
    return [even, odd]
}
console.log(evenOddPartition([5, 8, 9, 2, 0]));
console.log(evenOddPartition([1, 0, 1, 0, 1, 0]));
console.log(evenOddPartition([1, 3, 5, 7, 9]));
console.log(evenOddPartition([]));

// ➞ [[8, 2, 0], [5, 9]]
// ➞ [[0, 0, 0], [1, 1, 1]]
// ➞ [[], [1, 3, 5, 7, 9]]
// ➞ [[], []]