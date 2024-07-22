// function arrayToString(arr) {
//     return arr.toString()    
// }

// function arrayToString(arr) {
//     return arr.join('')
// }

function arrayToString(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += (arr[i])
    }
    return result
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));
// ➞ "123456"
// ➞ "abcdef"
// ➞ "123asdAAAA"