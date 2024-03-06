function findFactors(n) {
    if (n <= 0) {
        return [];
    }

    const factors = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

console.log(findFactors(9));
console.log(findFactors(12));
console.log(findFactors(20));
console.log(findFactors(0));

// ➞ [1, 3, 9]
// 9 has three factors 1, 3 and 9
// ➞ [1, 2, 3, 4, 6, 12]
// ➞ [1, 2, 4, 5, 10, 20]
// ➞ []
// 0 has no factors