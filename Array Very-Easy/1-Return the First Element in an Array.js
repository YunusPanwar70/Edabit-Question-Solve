function getFirstValue(arr) {
    // return arr[0];
    return arr.shift();
};

console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));


// ➞ 1
// ➞ 80
// ➞ -500