// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

function freeShipping(obj) {
    const objvalues = Object.values(obj)
    return objvalues.reduce((acc, val) => acc + val, 0) >= 50.00
}
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));
console.log(freeShipping({ "Flatscreen TV": 399.99 }));
console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }));
// ➞ false
// ➞ true
// ➞ true