function getLastItem(arr) {
    // return arr[2];
    // return arr.pop();
    for (let i = arr.length - 1; i < arr.length; i++) {
        return arr[i];
    }
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));

// ➞ 3
// ➞ "duck"
// ➞ true