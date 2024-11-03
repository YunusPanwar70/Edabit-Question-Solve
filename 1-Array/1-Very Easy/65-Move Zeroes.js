// Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

// function moveZeros(arr) {
//     let nonZero = arr.filter((item) => item % 2 !== 0)
//     let Zero = arr.filter((item) => item === 0)
//     return [...nonZero, ...Zero]
// }

function moveZeros(arr) {
    let nonZeroero = [];
    let zeros = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            nonZeroero.push(arr[i])
        } else if (arr[i] === 0) {
            zeros.push(arr[i])
        }
    }
    return [...nonZeroero, ...zeros]
}
console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));
console.log(moveZeros([0, 1, null, 2, false, 1, 0]));
console.log(moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]));
// ➞ [1, 1, 2, 1, 3, 0, 0]
// ➞ [1, null, 2, false, 1, 0, 0]
// ➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Notes
// N/A