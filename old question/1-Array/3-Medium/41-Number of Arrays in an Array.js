// Return the total number of arrays inside a given array.

function numOfSubbarrays(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            count++
        }
    }
    return count
}
console.log(numOfSubbarrays([[1, 2, 3]]));
console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]));
console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]));
console.log(numOfSubbarrays([1, 2, 3]));
// ➞ 1
// ➞ 3
// ➞ 4
// ➞ 0