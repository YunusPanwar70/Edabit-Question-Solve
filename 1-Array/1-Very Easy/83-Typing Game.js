// Typing Game
// You're in the midst of creating a typing game.console.log(

// Create a function that takes in two arrays: the array of user - typed words, and the array of correctly - typed words and outputs an array containing 1s(correctly - typed words) );
// and - 1s(incorrectly - typed words).

//     Inputs:
// User - typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]
// Output: [1, 1, -1, -1, 1]

// fuuction correctStream(arr1, arr2) {
// return arr1.map((word, index) => word === arr2[index] ? 1 : -1)
// }

// function correctStream(arr1, arr2) {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] === arr2[i]) {
//             result.push(1)
//         } else {
//             result.push(-1)
//         }
//     }
//     return result
// }
// console.log(correctStream(
//     ["it", "is", "find"],
//     ["it", "is", "fine"]
// ));
// console.log(correctStream(
//     ["april", "showrs", "bring", "may", "flowers"],
//     ["april", "showers", "bring", "may", "flowers"]
// ));
// ➞ [1, 1, -1]
// ➞ [1, -1, 1, 1, 1]

// Notes
// The input array lengths will always be the same.



const a = Symbol('a');
const b = a;
const obj = {
  [a]:1,
  [b]:2
};
console.log(obj);
