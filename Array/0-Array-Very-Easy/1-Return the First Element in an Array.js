// Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr) {
    // return arr[0];
    // return arr.shift();
    for (let i = 0; i < arr.length; i++) {
        return arr[i];
    }
};
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));

// ➞ 1
// ➞ 80
// ➞ -500