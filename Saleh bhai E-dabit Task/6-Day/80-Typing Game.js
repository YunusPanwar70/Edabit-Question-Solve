function correctStream(arr1, arr2) {
    // return arr1.map((word, index) => word === arr2[index] ? 1 : -1)
    // return arr1.indexOf(arr2)
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