function countTrue(arr) {
    // return arr.filter(value => value === true).length;

    return arr.filter(Boolean).length;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));



// ➞ 2
// ➞ 0
// ➞ 0