function valueAt(arr,num) {
    return arr[parseInt(num)];
};
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));
// ➞ 6
// ➞ 5
// ➞ 4