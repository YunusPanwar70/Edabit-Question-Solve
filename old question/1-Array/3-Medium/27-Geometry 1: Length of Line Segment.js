// Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.

function lineLength(point1, point2) {
    let [x1, y1] = point1;
    let [x2, y2] = point2;
    const distance = Math.hypot(x2 - x1, y2 - y1)
    return parseFloat(distance.toFixed(2))
}
console.log(lineLength([15, 7], [22, 11]));
console.log(lineLength([0, 0], [0, 0]));
console.log(lineLength([0, 0], [1, 1]));
// ➞ 8.06
// ➞ 0
// ➞ 1.41