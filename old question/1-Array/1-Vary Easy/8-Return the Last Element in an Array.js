// function getLastItem(arr) {
//     return arr.splice(2)
// }

// function getLastItem(arr) {
//     return arr[2]
// }

// function getLastItem(arr) {
//     return arr.pop()
// }

// function getLastItem(arr) {
//     return arr.slice(2)
// }

// function getLastItem(arr) {
//     return arr[arr.length-1]
// }

// function getLastItem(arr) {
//     let a = arr.at(-1);
// }

// function getLastItem(arr) {
//     let a = arr.at(2);
// }

function getLastItem(arr) {
    for (let i = 2; i < arr.length; i++) {
        return arr[i]
    }
}
console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));
// ➞ 3
// ➞ "duck"
// ➞ true