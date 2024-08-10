// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// function incrementItems(arr) {
//     return arr.map((acc) => acc + 1)
// }

// function incrementItems(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] + 1)
//     }
//     return result
// }

// function incrementItems(arr) {
//     let result = [];
//     let i = 0;
//     while (i < arr.length) {
//         result.push(arr[i] + 1)
//     }
//     return result
// }

// function incrementItems(arr) {
//     for (const i in arr) {
//         arr[i] = Number(arr[i]) + 1
//     }
//     return arr
// }

// function incrementItems(arr) {
//     return arr.reduce((acc, value) => {
//         acc.push(value + 1);
//         return acc;
//     }, []);
// }

function incrementItems(arr) {
    arr.forEach((value, index, array) => {
        array[index] = value + 1;
    });
    return arr;
}
console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));
// ➞ [1, 2, 3, 4]
// ➞ [3, 5, 7, 9]
// ➞ [0, -1, -2, -3]

// Notes
// Make sure to read every line carefully.