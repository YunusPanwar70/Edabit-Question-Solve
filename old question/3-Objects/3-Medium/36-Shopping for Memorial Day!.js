// Create a function that takes an array of objects and calculate the total based on the quantity of items purchased. Apply a 6% sales tax for each item when appropriate.

function checkout(items) {
    let total = items.reduce((acc, item) => {
        let itemCost = item.prc * item.qty;
        if (item.taxable) {
            itemCost *= 1.06;
        }
        return acc + itemCost;
    }, 0);
    return total.toFixed(2);
}
console.log(checkout([
    { desc: "potato chips", prc: 2, qty: 2, taxable: false },
    { desc: "soda", prc: 3, qty: 2, taxable: false },
    { desc: "paper plates", prc: 5, qty: 1, taxable: true }
]));
// ➞ 15.3