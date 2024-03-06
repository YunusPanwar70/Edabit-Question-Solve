// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
// Your challenge is to write your own version using vanilla JavaScript.

function drop(arr, num) {
    // return arr.slice(num);
    let result = [];
    for (let i = num; i < arr.length; i++) {
        result.push(arr[i]);
    };
    return result
};

console.log(drop([1, 2, 3], 1));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0));

// ➞ [2, 3]
// ➞ [3]
// ➞ []
// ➞ [1, 2, 3]