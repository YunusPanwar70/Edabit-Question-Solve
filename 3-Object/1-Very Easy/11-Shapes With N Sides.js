// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"

// function nSidedShape(n) {
//     const shapes = ["circle", "semi-circle", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
//     return shapes[n - 1];
// }

function nSidedShape(n) {
    switch (n) {
        case 1: return 'circle';
        case 2: return 'Semi-circle';
        case 3: return 'triangle';
        case 4: return 'square';
        case 5: return 'pentagon';
        case 6: return 'hexagon';
        case 7: return 'heptagon';
        case 8: return 'octagon';
        case 9: return 'nongon'
        case 10: return 'decagon';
        default: return "Invalid Input"
    }
}
console.log(nSidedShape(3));  //➞ "triangle"
console.log(nSidedShape(1));  //➞ "circle"
console.log(nSidedShape(9));  //➞ "nonagon"