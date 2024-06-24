// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.


// spinAround(["right", "right", "right", "right", "left", "right"]) ➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)

function spinAround(str) {
    
}
console.log(spinAround(["left", "right", "left", "right"]));
console.log(spinAround(["right", "right", "right", "right", "right", "right", "right", "right"]));
console.log(spinAround(["left", "left", "left", "left"]));
// ➞ 0
// ➞ 2
// ➞ 1

// Notes
// Return a positive number.
// All tests will only include the words "right" and "left".