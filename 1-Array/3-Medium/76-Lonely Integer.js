// You are given an array of integers having both negative and positive values, except for one integer which can be negative or positive. Create a function to find out that integer.

function lonelyInteger(arr) {
    
}
console.log(lonelyInteger([1, -1, 2, -2, 3]));
console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]));
console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]));

// ➞ 3
// 3 has no matching negative appearance.
// ➞ -4
// -4 has no matching positive appearance.
// ➞ -9