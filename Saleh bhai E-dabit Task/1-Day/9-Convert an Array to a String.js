function arrayToString(arr) {
    // return arr.join("");
    let str = '';

    for (let i = 0; i < arr.length; i++) {
        str+=arr[i]
    }
    return str
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));
// ➞ "123456"
//  ➞ "abcdef"
// ➞ "123asdAAAA"