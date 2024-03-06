const arr = ["cars", "planes", ["trains", ["motorcycles"]]];

let trans1 = arr[0];
let trans2 = arr[1];
let trans3 = arr[2][0];
let trans4 = arr[2][1][0];

console.log(trans1)
console.log(trans2)
console.log(trans3)
console.log(trans4)

// outputs "cars"
// outputs "planes"
// outputs "trains"
// outputs "motorcycles"