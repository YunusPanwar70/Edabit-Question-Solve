function deNest(arr) {
    return arr.flat(Infinity)
}
console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]));
console.log(deNest([[[[[[[true]]]]]]]));
console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]));
// ➞ 3
// ➞ true
// ➞ "edabit"