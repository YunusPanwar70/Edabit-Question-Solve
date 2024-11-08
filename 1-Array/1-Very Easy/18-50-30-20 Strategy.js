// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// function fiftyThirtyTwenty(n) {
//     let obj = {
//         Need: n * 0.5,
//         Want: n * 0.3,
//         Saving: n * 0.2
//     }
//     return obj
// }

function fiftyThirtyTwenty(arr) {
    const Need = arr * 0.5;
    const Wants = arr * 0.3;
    const Savings = arr * 0.2;
    return { Need, Wants, Savings }
}
console.log(fiftyThirtyTwenty(10000));
console.log(fiftyThirtyTwenty(50000));
console.log(fiftyThirtyTwenty(13450));
// ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }