function nSidedShape(n) {
    let a = {
        1: "circle",
        2: "semi-circle",
        3: "triangle",
        4: "square",
        5: "pentagon",
        6: "hexagon",
        7: "heptagon",
        8: "octagon",
        9: "nonagon",
        10: "decagon",
    }
    return a[n]
}

console.log(nSidedShape(3));
console.log(nSidedShape(1));
console.log(nSidedShape(9));


// ➞ "triangle"
// ➞ "circle"
// ➞ "nonagon"