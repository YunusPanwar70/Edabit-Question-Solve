function arithmeticProgression(first, diff, n) {
    const sequence = [first];

    for (let i = 1; i < n; i++) {
        const next = first + i * diff;
        sequence.push(next);
    }

    return sequence.join(', ');
}

console.log(arithmeticProgression(1, 2, 5));
console.log(arithmeticProgression(1, 0, 5));
console.log(arithmeticProgression(1, -3, 10));


// ➞ "1, 3, 5, 7, 9"
// ➞ "1, 1, 1, 1, 1"
// ➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"