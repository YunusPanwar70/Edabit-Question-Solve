// Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.

function expensiveOrders(obj) {
    
}
console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000));
console.log(expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000));
console.log(expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40));
// ➞ { "a": 3000, "c": 1050 }
// ➞ { "Gucci Fur": 24600 }
// ➞ {}