// In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.

// Two points on a Cartesian plane

// Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.

function getDistance(obj1, obj2) {

}
console.log(getDistance({ x: -2, y: 1 }, { x: 4, y: 3 }));
console.log(getDistance({ x: 0, y: 0 }, { x: 1, y: 1 }));
console.log(getDistance({ x: 10, y: -5 }, { x: 8, y: 16 }));

// ➞ 6.325
// ➞ 1.414
// ➞ 21.095

// Notes
// Take a look at the Resources tab if you need a refresher on the geometry related to this challenge.
// The "distance" is the shortest distance between the two points, or the straight line generated from a to b.