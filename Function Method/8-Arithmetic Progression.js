function arithmeticProgression(first, diff, n) {
    sequence = [str(first + i * diff) for in range(n)]
    return ', '.join(sequence)
}

console.log(arithmeticProgression(1, 2, 5));
console.log(arithmeticProgression(1, 0, 5));
console.log(arithmeticProgression(1, -3, 10));


// ➞ "1, 3, 5, 7, 9"
// ➞ "1, 1, 1, 1, 1"
// ➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"