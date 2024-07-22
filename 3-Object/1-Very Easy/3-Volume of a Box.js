// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.


// function volumeOfBox(sizes) {
//     return sizes.length * sizes.width * sizes.height
// }

// function volumeOfBox(sizes) {
//     let val = Object.values(sizes);
//     return val[0] * val[1] * val[2]
// }

// function volumeOfBox(sizes) {
//     let val = Object.values(sizes);
//     let result = 1;
//     for (let i = 0; i < val.length; i++) {
//         result *= val[i]
//     }
//     return result
// }

// function volumeOfBox(sizes) {
//     let val = Object.values(sizes);
//     let result = 1;
//     let i = 0;
//     while (i < val.length) {
//         result *= val[i]
//         i++
//     }
//     return result
// }

// function volumeOfBox(sizes) {
//     let result = 1;
//     for (const key in sizes) {
//         result *= sizes[key]
//     }
//     return result
// }

function volumeOfBox(sizes) {
    let valuesOfObj = Object.values(sizes);
    return valuesOfObj.reduce((acc, val) => acc * val, 1)
}
console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));
// ➞ 10
// ➞ 16
// ➞ 30

// Notes
// Don't forget to return the result.
// Remember that the values are in an object.
// Volume is length * width * height.