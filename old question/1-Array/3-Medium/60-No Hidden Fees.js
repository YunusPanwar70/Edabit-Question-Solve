// Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

// function hasHiddenFee(prices, total) {
//     const sum = prices.reduce((acc, price) => acc + parseFloat(price.slice(1)), 0);
//     const totalValue = parseFloat(total.slice(1));
//     return totalValue > sum;
// }
function hasHiddenFee(prices, total) {
    let sum = 0;
    const totalValue = parseFloat(total.slice(1));
    for (let i = 0; i < prices.length; i++) {
        const val = parseFloat(prices[i].slice(1));
        sum += val
    }
    return totalValue > sum
}
console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15"));
console.log(hasHiddenFee(["$1", "$2", "$3"], "$6"));
console.log(hasHiddenFee(["$1"], "$4"));
// ➞ false
// ➞ false
// ➞ true

// Remember that each price is given as a string.
// All $ signs will be at the beginning of the number.