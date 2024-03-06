function parseArray(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + " ";
    }
    return str;
    // return arr.toString();
};
console.log(parseArray([1, 2, "a", "b"]));
console.log(parseArray(["abc", 123, "def", 456]));
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(parseArray([]));

// ➞ ["1", "2", "a", "b"]
// ➞ ["abc", "123", "def", "456"]
// ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
// ➞ []