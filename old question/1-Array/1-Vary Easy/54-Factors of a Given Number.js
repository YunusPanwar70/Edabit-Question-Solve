function findFactors(num) {
    // return num.map((item) => item.length % 2)
    let result = [];
    for (let i = 0; i <=num; i++) {
        if (num % i === 0) {
            result.push(i)
        }
    }
    return result
}
console.log(findFactors(9));
console.log(findFactors(12));
console.log(findFactors(20));
console.log(findFactors(0));
// ➞ [1, 3, 9]
// ➞ [1, 2, 3, 4, 6, 12]
// ➞ [1, 2, 4, 5, 10, 20]
// ➞ []
// 9 has three factors 1, 3 and 9
// 0 has no factors