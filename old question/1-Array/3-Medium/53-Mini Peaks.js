// Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.

function miniPeaks(arr) {
    
}
console.log(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]));
console.log(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]));
console.log(miniPeaks([1, 2, 3, 4, 5, 6]));

// ➞ [5, 9]
// 5 has neighbours 4 and 2, both are less than 5.
// ➞ [2, 3, 5]
// ➞ []