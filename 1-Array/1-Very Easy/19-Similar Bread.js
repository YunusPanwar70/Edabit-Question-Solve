// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// function hasSameBread(arr1, arr2) {
//     return arr1[0].includes(arr2[0])
// }

// function hasSameBread(arr1, arr2) {
//     return arr1[0] === arr2[0] && arr1[arr1.length - 1] === arr2[arr2.length - 1];
// }

function hasSameBread(arr1, arr2) {
    if (arr1[0] === arr2[0]) {
        return true
    } else if (arr1[0] === arr2[2]) {
        return false
    } else if (arr1[0] === arr2[0]) {
        return false
    }
}
console.log(hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
));
console.log(hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
));
console.log(hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
));


// ➞ true
// ➞ false
// ➞ false

// Notes
// The arrays will always be three elements long.
// The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.