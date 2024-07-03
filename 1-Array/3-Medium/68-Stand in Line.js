// Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.

// function nextInLine(arr, num) {
//     if (arr.length === 0) {
//         return "No array has been selected"
//     }
//     arr.push(num)
//     arr.shift()
//     return arr
// }

// function nextInLine(arr, num) {
//     if (arr.length === 0) {
//         return 'No array has been selected'
//     }
//     let conVal = arr.concat(num)
//     return conVal.slice(1)
// }

function nextInLine(arr, num) {
    if (arr.length === 0) {
        return "No array has been selected";
    }
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = num;
    return arr;
}
console.log(nextInLine([5, 6, 7, 8, 9], 1));
console.log(nextInLine([7, 6, 3, 23, 17], 10));
console.log(nextInLine([1, 10, 20, 42], 6));
console.log(nextInLine([], 6));
// ➞ [6, 7, 8, 9, 1]
// ➞ [6, 3, 23, 17, 10]
// ➞ [10, 20, 42, 6]
// ➞ "No array has been selected"

// Notes
// For an empty array input, return: "No array has been selected"u