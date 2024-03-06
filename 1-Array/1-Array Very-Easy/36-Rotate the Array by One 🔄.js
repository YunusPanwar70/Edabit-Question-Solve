function rotateByOne(arr) {
    let lastValue = arr.pop();
    arr.unshift(lastValue);
    return arr
}

console.log(rotateByOne([1, 2, 3, 4, 5]));
console.log(rotateByOne([6, 5, 8, 9, 7]));
console.log(rotateByOne([20, 15, 26, 8, 4]));


// ➞ [5, 1, 2, 3, 4]
// ➞ [7, 6, 5, 8, 9]
// ➞ [4, 20, 15, 26, 8]