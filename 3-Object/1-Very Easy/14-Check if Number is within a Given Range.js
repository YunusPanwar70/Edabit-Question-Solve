// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

// function isInRange(n, { min, max }) {
//     return n >= min && n <= max;
// }

function isInRange(num, range) {
    let rangeValue = Object.values(range);
    return num >= rangeValue[0] && num <= rangeValue[1]
}
console.log(isInRange(4, { min: 0, max: 5 }));
console.log(isInRange(4, { min: 4, max: 5 }));
console.log(isInRange(4, { min: 6, max: 10 }));
console.log(isInRange(5, { min: 5, max: 5 }));

// ➞ true
// ➞ true
// ➞ false
// ➞ true

// Notes
// Numbers can be positive or negative, and they may not be integers.
// You can assume min <= max is always true.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.