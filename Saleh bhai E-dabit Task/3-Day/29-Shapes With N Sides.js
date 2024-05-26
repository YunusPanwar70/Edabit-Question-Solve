function nSidedShape(n) {
    switch (n) {
        case 1:
            return "circle"
        case 2:
            return "semi-circle"
        case 3:
            return "triangle"
        case 4:
            return "square"
        case 5:
            return "pentagon"
        case 6:
            return "hexagon"
        case 7:
            return "heptagon"
        case 8:
            return "octagon"
        case 9:
            return "nonagon"
        case 10:
            return "decagon"
        default:
            return 'Invalid'
    }
}
console.log(nSidedShape(3));
console.log(nSidedShape(1));
console.log(nSidedShape(9));
// ➞ "triangle"
// ➞ "circle"
// ➞ "nonagon"