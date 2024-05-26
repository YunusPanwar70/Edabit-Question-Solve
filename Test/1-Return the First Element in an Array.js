// Create a function that takes an array containing only numbers and return the first element.

// function getFirstValue(arr) {
//     return arr[0]
// }
// function getFirstValue(arr) {
//     const [firstElement] = arr;
//     return firstElement
// }
// function getFirstValue(arr) {
//     return arr.shift(0)
// }
function getFirstValue(arr) {
 return arr.slice(0, 1, 2)[0]
}
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));
// ➞ 1
// ➞ 80
// ➞ -500