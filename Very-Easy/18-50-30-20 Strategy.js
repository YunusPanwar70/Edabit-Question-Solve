function fiftyThirtyTwenty(arr) {
    const Needs = 0.5 * arr;
    const Wants = 0.3 * arr;
    const Savings = 0.2 * arr;
    return {
        Needs: Needs,
        Wants: Wants,
        Savings: Savings,
    };
}

console.log(fiftyThirtyTwenty(10000));
console.log(fiftyThirtyTwenty(50000));
console.log(fiftyThirtyTwenty(13450));

// ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }