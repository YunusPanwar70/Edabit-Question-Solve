// There is an easy way to assign to array values to the nth index by using rest parameter syntax.

let one = [1, 2, 3, 4];
var [head, tail] = one

console.log(head) // outputs  1
console.log(tail) // outputs 2

let two = one[0];
let three = one[1];
let four = one[2];
let five = one[3];

console.log(two);
console.log(three);
// But how could I make tail = [2, 3, 4] instead of tail = 2?

// Notes
// Check the Resources tab for more examples.