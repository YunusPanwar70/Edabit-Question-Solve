function moveZeros(arr) {
    let nonZeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            if (nonZeroCount !== i) {
                [arr[nonZeroCount], arr[i]] = [arr[i], arr[nonZeroCount]];
            }
            nonZeroCount++;
        }
    }

    return arr;
}

console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));
console.log(moveZeros([0, 1, null, 2, false, 1, 0]));
console.log(moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]));


// ➞ [1, 1, 2, 1, 3, 0, 0]
// ➞ [1, null, 2, false, 1, 0, 0]
// ➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]