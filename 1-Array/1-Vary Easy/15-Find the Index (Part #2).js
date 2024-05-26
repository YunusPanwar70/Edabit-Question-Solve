// function search(arr, num) {
//     return arr.indexOf(num)
// }
// function search(arr, num) {
//     return arr.findIndex((item) => item === num)
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