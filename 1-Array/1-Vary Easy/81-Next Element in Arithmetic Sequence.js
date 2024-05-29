function nextElement(arr) {
    const n = arr[arr.length - 1];
    const n2 = arr[arr.length - 2];
    const diffrense = n - n2;
    return n + diffrense;
}
console.log(nextElement([3, 5, 7, 9]));
console.log(nextElement([-5, -6, -7]));
console.log(nextElement([2, 2, 2, 2, 2]));
// ➞ 11
// ➞ -8
// ➞ 2