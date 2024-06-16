// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// function removeDups(arr) {
//     return [...new Set(arr)]
// }

// function removeDups(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

function removeDups(arr) {
    let uniqueArr = [];
    for (let item of arr) {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item)
        }
    }
    return uniqueArr
}
console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));
// ➞ [1, 0]
// ➞ ["The", "big", "cat"]
// ➞ ["John", "Taylor"]