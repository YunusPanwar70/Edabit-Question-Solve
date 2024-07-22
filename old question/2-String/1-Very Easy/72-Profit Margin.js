// Create a function that calculates the profit margin given costPrice and salesPrice. Return the result as a percentage formatted string, and rounded to one decimal. To calculate profit margin you subtract the cost from the sales price, then divide by sales price.

function profitMargin(costPrice, salesPrice) {
    return `${((salesPrice - costPrice) / salesPrice * 100).toFixed(1)}%`
}
console.log(profitMargin(50, 50));
console.log(profitMargin(28, 39));
console.log(profitMargin(33, 84));
// ➞ "0.0%"
// ➞ "28.2%"
// ➞ "60.7%"