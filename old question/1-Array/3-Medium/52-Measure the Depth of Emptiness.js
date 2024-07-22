// In this challenge you will receive an input of the form:
// [[[[[[[[[[[]]]]]]]]]]]
// In other words, an array containing an array containing an array containing... an array containing nothing.
// Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

function measureDepth(arr) {
    let depth = 0;
    let str = JSON.stringify(arr);

    for (let char of str) {
        if (char === '[') {
            depth++;
        }
    }
    return depth;
}
console.log(measureDepth([]));
console.log(measureDepth([[]]));
console.log(measureDepth([[[]]]));
console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]]));
// ➞ 1
// ➞ 2
// ➞ 3
// ➞ 11