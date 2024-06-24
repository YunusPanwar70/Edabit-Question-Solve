// Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

function backToHome(str) {
    let x = 0;
    let y = 0;
    for (let direction of str) {
        if (direction === 'N') {
            x++;
        } else if (direction === 'S') {
            x--;
        } else if (direction === 'E') {
            y++;
        } else if (direction === 'W') {
            y--;
        }
    }
    return x === 0 && y === 0;
}
console.log(backToHome("EEWE"));
console.log(backToHome("NENESSWW"));
console.log(backToHome("NEESSW"));
// ➞ false
// ➞ true
// ➞ false