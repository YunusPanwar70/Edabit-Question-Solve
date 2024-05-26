function getMultipliedArr(arr) {
    // return arr.map((item) => item * 2);
    for (const i in arr) {
        arr[i] *= 2
    }
    return arr
}
console.log(getMultipliedArr([2, 5, 3]));
console.log(getMultipliedArr([1, 86, -5]));
console.log(getMultipliedArr([5, 382, 0]));
// ➞ [4, 10, 6]
// ➞ [2, 172, -10]
// ➞ [10, 764, 0]