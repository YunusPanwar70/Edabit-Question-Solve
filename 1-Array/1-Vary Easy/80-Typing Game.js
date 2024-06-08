function correctStream(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            result.push(1);
        } else {
            result.push(-1);
        }
    }
    return result;
}
console.log(correctStream(
    ["it", "is", "find"],
    ["it", "is", "fine"]
));
console.log(correctStream(
    ["april", "showrs", "bring", "may", "flowers"],
    ["april", "showers", "bring", "may", "flowers"]
));
//   ➞ [1, 1, -1]
//   ➞ [1, -1, 1, 1, 1]