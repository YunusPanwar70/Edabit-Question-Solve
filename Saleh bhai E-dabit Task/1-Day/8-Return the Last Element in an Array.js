function getLastItem(arr) {
    // return arr[arr.length - 1]
    let a = arr.at(-1);
    return a;
    // return arr.pop()
}
console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));
// ➞ 3
// ➞ "duck"
// ➞ true