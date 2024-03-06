function concat(arr1, arr2) {
    // return arr1.concat(arr2);

    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }

    for (let j = 0; j < arr2.length; j++) {
        result.push(arr2[j]);
    }
    return result
};

console.log(concat([1, 3, 5], [2, 6, 8]));
console.log(concat([7, 8], [10, 9, 1, 1, 2]));
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));

// ➞ [1, 3, 5, 2, 6, 8]
// ➞ [7, 8, 10, 9, 1, 1, 2]
// ➞ [4, 5, 1, 3, 3, 3, 3, 3]