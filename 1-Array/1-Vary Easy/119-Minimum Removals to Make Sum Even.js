// Create a function that returns the minimum number of removals to make the sum of all elements in an array even.
function minimumRemovals(arr) {
    const sum = arr.filter((item) => item % 2 === 0)
    if (sum % 2 === 0) {
        return 0
    }
    
}
console.log(minimumRemovals([1, 2, 3, 4, 5]));
console.log(minimumRemovals([5, 7, 9, 11]));
console.log(minimumRemovals([5, 7, 9, 12]));
// ➞ 1
// ➞ 0
// ➞ 1