function sumMinimums(arr) {
    let a = arr[0][0];
    let b = arr[1][0];
    let c = arr[2][0];
    return a + b + c
}
console.log(sumMinimums(
    [[1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]]
));
//   ➞ 26
// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 2