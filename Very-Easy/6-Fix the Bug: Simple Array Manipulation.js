function incrementItems(arr) {
    const sum = [];
    for (let i = 0; i < arr.length; i++) {
        sum.push(arr[i] + 1);
    }
    return sum;
}
console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));

// ➞ [1, 2, 3, 4]
// ➞ [3, 5, 7, 9]
// ➞ [0, -1, -2, -3]