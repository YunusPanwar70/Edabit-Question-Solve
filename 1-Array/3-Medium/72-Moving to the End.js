// Write a function that moves all elements of one type to the end of the array.

function moveToEnd(arr, el) {
    let notType = arr.filter((item) => item !== el)
    let ofType = arr.filter((item) => item == el)
    return notType.concat(ofType)
}
console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1));
console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9));
console.log(moveToEnd(["a", "a", "a", "b"], "a"));
// ➞ [3, 2, 4, 4, 1, 1]
// Move all the 1s to the end of the array.
// ➞ [7, 8, 1, 2, 3, 4, 9]
// ➞ ["b", "a", "a", "a"]
// Notes
// Keep the order of the un-moved items the same.