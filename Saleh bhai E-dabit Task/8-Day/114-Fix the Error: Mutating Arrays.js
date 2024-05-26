// Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.

function minusOne(arr) {
    arr.pop()
    return arr
}

x = [1, 2, 3, 4, 5]
console.log(minusOne(x));
console.log(minusOne(x));
console.log(minusOne(x));
console.log(minusOne(x));

// What I want instead:
// console.log(minusOne(x));
// console.log(minusOne(x));
// console.log(minusOne(x));
// console.log(minusOne(x));


// ➞ [1, 2, 3, 4]  // 1st time function is called.
// ➞ [1, 2, 3]  // 2nd time function is called.
// ➞ [1, 2]  // 3rd time function is called.
// ➞ [1]  // 4th time function is called.



// ➞ [1, 2, 3, 4]  // 1st time function is called.
// ➞ [1, 2, 3, 4]  // 2nd time function is called.
// ➞ [1, 2, 3, 4]  // 3rd time function is called.
// ➞ [1, 2, 3, 4]  // 4th time function is called.
