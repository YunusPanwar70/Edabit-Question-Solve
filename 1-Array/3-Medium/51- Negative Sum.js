// Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

// Examples
// There are a total of 10 positive numbers.
// The sum of all negative numbers equals -65.
function countPosSumNeg(arr) {
    if (arr.length === 0) return [];

    let positiveCount = 0;
    let negativeSum = 0;

    for (let num of arr) {
        if (num > 0) {
            positiveCount++;
        } else {
            negativeSum += num;
        }
    }

    return [positiveCount, negativeSum];
}
console.log(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]));
console.log(countPosSumNeg([91, -4, 80, -73, -28]));
console.log(countPosSumNeg([]));
// ➞ [10, -65]
// ➞ [7, -252]
// ➞ [2, -105]
// ➞ []