// The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.
// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

function calculateDifference(obj, limit) {
    const totalValue = Object.values(obj).reduce((acc, val) => acc + val)
    const difference = totalValue - limit;
    return Math.max(difference)
}
console.log(calculateDifference({ "baseball bat": 20 }, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
// ➞ 15
// ➞ 11
// ➞ 1
