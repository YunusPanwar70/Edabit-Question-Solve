function fiftyThirtyTwenty(num) {
    const Need = num * 0.5;
    const Wants = num * 0.3;
    const Savings = num * 0.2;
    return { Need, Wants, Savings }
}
console.log(fiftyThirtyTwenty(10000));
console.log(fiftyThirtyTwenty(50000));
console.log(fiftyThirtyTwenty(13450));
// ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }