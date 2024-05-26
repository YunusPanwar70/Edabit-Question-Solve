function calcDeterminant(arr) {
    let [[a, b], [c, d]] = arr;
    return (a * d) - (b * c)
}
console.log(calcDeterminant([
    [1, 2],
    [3, 4]
]));
console.log(calcDeterminant([
    [5, 3],
    [3, 1]
]));
console.log(calcDeterminant([
    [1, 1],
    [1, 1]
]));
//   ➞ -2
//   ➞ -4
//   ➞ 0