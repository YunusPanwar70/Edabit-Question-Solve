// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with only identical elements.

function countIdentical(arr) {
    
}
console.log(countIdentical([[1], [2], [3], [4]]));
// Single-item arrays still count as having identical elements.
console.log(countIdentical([[1, 2], [2, 3], [3, 4], [4, 4]]));
console.log(countIdentical([[33, 33], [5], ["a", "a"], [2, 2, 2], [1, 2, 2], [3, 1]]));
// 4 arrays with identical elements: [33, 33], [5], ["a", "a"], and [2, 2, 2]
console.log(countIdentical([["@", "@", "@", "@"], [2, 3], [3, 4], [4, 4]]));
// ➞ 4
// ➞ 1
// ➞ 4
// ➞ 2

// Notes
// Single - element arrays count as (trivially) having identical elements.