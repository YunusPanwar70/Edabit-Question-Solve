// function rogerShots(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'Bang!' || arr[i] === 'BangBang!') {
//             count++;
//         }
//     }
//     return count / 2
// }

// function rogerShots(str) {
//     return str.filter((item) => item === 'Bang!' || item === 'BangBang!').length / 2
// }

function rogerShots(arr) {
    let count = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === 'Bang!' || arr[i] === 'BangBang!') {
            count++;
        }
    }
    return count / 2
}
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]));
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]));
console.log(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]));
// ➞ 3
// ➞ 2.5
// ➞ 2