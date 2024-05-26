// Create a function that takes an array containing only numbers and return the first element.
// function getFirstValue(arr) {
//     return arr[0]
// }
// function getFirstValue(arr) {
//     return arr.shift()    
// }
// function getFirstValue(arr) {
//     return arr.slice(0, 1, 2);
// }
function getFirstValue(arr) {
    const [firstElement] = arr
    return firstElement
}
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));
// ➞ 1
// ➞ 80
// ➞ -500


// 45
// 47
// 48
// 49
// 55
// 57
// 61
// 66
// 67
// 69
// 73
// 74
// 80
// 81
// 82
// 90
// 119
// 120
// 124
// 125
// 142
// 145
// 146
// 147