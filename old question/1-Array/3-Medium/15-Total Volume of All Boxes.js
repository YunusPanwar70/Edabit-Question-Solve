// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

// function totalVolume(...boxes) {
// return boxes.reduce((total, box) => {
//     return total + box.reduce((volume, dimension) => volume * dimension, 1);
// }, 0);
// }

function totalVolume(...boxes) {
    let total = 0;
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        let volume = box[0] * box[1] * box[2]
        total += volume
    }
    return total
}
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume([2, 2, 2], [2, 1, 1]));
console.log(totalVolume([1, 1, 1]));
// ➞ 63
// ➞ 10
// ➞ 1 