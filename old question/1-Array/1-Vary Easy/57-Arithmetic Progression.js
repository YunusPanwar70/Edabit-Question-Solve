function arithmeticProgression(start, diff, n) {
    let result = []
    for (let i = start; i <= n; i++) {
        result.push(start)
        start += diff
    }
    return result.join(',')
}
console.log(arithmeticProgression(1, 2, 5));
console.log(arithmeticProgression(1, 0, 5));
console.log(arithmeticProgression(1, -3, 10));

// ➞ "1, 3, 5, 7, 9"
// ➞ "1, 1, 1, 1, 1"
// ➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"