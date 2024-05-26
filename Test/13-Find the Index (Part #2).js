// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// function search(arr, num) {
//     return arr.indexOf(num)
// }
function search(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
    return -1
}
console.log(search([1, 2, 3, 4], 3));
console.log(search([2, 4, 6, 8, 10], 8));
console.log(search([1, 3, 5, 7, 9], 11));
// ➞ 2
// ➞ 3
// ➞ -1