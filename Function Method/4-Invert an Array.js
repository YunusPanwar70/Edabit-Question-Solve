function invertArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
    }
    return arr;
};

console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
console.log(invertArray([]));

// ➞ [-1, -2, -3, -4, -5]
// ➞ [-1, 2, -3, 4, -5]
// ➞ []