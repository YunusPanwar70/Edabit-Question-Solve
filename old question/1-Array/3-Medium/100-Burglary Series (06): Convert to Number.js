// // You prepare a list to send to the insurance company.As you finish, you notice you misformatted it.Given an object with at least one key / value pair, convert all the values to numbers.

// function convertToNumber(obj) {
//     const newObj = {};

//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             newObj[key] = Number(obj[key]);
//         }
//     }
//     return newObj;
// }
// console.log(convertToNumber({ piano: "200" }));
// console.log(convertToNumber({ piano: "200", tv: "300" }));
// console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" }));
// // ➞ { piano: 200 }
// // ➞ { piano: 200, tv: 300 }
// // ➞ { piano: 200, tv: 300, stereo: 400 }

function getLength(arr) {
    let a = arr.flat(Infinity)
    return a.reduce((acc, val) => acc + val)
}
console.log(getLength([1, [2, 3]]));
// ➞ 3
console.log(getLength([1, [2, [3, 4]]]));
// ➞ 4
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
// ➞ 6
console.log(getLength([1, [2], 1, [2], 1]));
// ➞ 5