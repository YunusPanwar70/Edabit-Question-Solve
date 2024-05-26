function reverse(arr) {
    // return arr.reverse();

    let a = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        a.push(arr[i])
    }
    return a
}
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([]));
// ➞ [4, 3, 2, 1]
// ➞ [4, 3, 2, 9, 9]
// ➞ []