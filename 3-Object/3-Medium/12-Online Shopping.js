// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

// function freeShipping(obj) {
//     let objValues = Object.values(obj);
//     return objValues.reduce((acc, val) => acc + val) >= 50.00
// }

// function freeShipping(obj) {
//     let objValues = Object.values(obj);
//     let sum = 0;
//     for (let i = 0; i < objValues.length; i++) {
//         sum += objValues[i]
//     }
//     return sum >= 50.00
// }

function freeShipping(obj) {
    let objValues = Object.values(obj)
    let sum = 0;
    let i = 0;
    while (i < objValues.length) {
        sum += objValues[i]
        i++
    }
    return sum >= 50.00
}
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));
console.log(freeShipping({ "Flatscreen TV": 399.99 }));
console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }));

// ➞ false
// ➞ true
// ➞ true


// Notes
// Ignore tax or additional fees when calculating the total order cost.