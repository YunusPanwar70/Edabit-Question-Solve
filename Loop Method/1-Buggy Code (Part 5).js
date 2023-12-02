function printArray(number) {
    let result = []
    for (let i = 1; i < number; i++) {
        result.push(i)
    }
    return result
}

console.log(printArray(1));
console.log(printArray(3));
console.log(printArray(6));

// ➞ [1]
// ➞ [1, 2, 3]
// ➞ [1, 2, 3, 4, 5, 6]