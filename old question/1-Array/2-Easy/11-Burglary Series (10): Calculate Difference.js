// The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.
// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

// function calculateDifference(obj, num) {
//     const total = Object.values(obj).reduce((acc, val) => acc + val)
//     const difference = total - num
//     return difference
// }

function calculateDifference(obj, num) {
    let result = 0;
    const objectValue = Object.values(obj)
    for (let i = 0; i < objectValue.length; i++) {
        result += objectValue[i]
    }
    return result - num
}
console.log(calculateDifference({ "baseball bat": 20 }, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
// ➞ 15
// ➞ 11
// ➞ 1