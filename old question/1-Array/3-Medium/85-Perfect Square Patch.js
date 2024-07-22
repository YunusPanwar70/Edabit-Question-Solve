// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

function squarePatch(n) {
    if (n === 0) return [];
    const patch = [];
    for (let i = 0; i < n; i++) {
        const row = new Array(n).fill(n);
        patch.push(row);
    }
    return patch.flat();
}
console.log(squarePatch(3));
console.log(squarePatch(5));
console.log(squarePatch(1));
console.log(squarePatch(0));
// ➞[
//     [3, 3, 3],
//     [3, 3, 3],
//     [3, 3, 3]
// ]

// ➞[
//     [5, 5, 5, 5, 5],
//     [5, 5, 5, 5, 5],
//     [5, 5, 5, 5, 5],
//     [5, 5, 5, 5, 5],
//     [5, 5, 5, 5, 5]
// ]

// ➞[
//     [1]
// ]

// ➞[]

// Notes
// n >= 0.
// If n === 0, return an empty array.