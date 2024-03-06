// Create a function that accepts an array and returns the last item in the array.
function getLastItem(arr) {
    // return arr.pop();
    // return arr[2]

    for (let i = arr.length - 1; i < arr.length; i++) {
        return arr[i];
    };
};
console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));

// ➞ 3
// ➞ "duck"
// ➞ true