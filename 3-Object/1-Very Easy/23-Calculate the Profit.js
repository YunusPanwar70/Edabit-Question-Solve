// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.

function profit(obj) {
    const { costPrice, sellPrice, inventory } = obj;
    const result = (sellPrice - costPrice) * inventory;
    return Math.round(result);
}

function profit(obj) {
    const total = Object.values(obj)
    const result = (total[0] - total[1]) * total[2]
    return Math.round(result)
}
console.log(profit({
    costPrice: 32.67,
    sellPrice: 45.00,
    inventory: 1200
}));

console.log(profit({
    costPrice: 225.89,
    sellPrice: 550.00,
    inventory: 100
}));

console.log(profit({
    costPrice: 2.77,
    sellPrice: 7.95,
    inventory: 8500
}));

// ➞ 14796
// ➞ 32411
// ➞ 44030


// Notes
// Assume all inventory has been sold.
// Profit = Total Sales - Total Cost