function battingAvg(arr) {
    let a = arr.reduce((sum1, sum2) => sum1 + sum2[0], 0);
    let b = arr.reduce((sum1, sum2) => sum1 + sum2[1], 0);

    if (b === 0) {
        return "0.000";
    }
    let c = a / b;
    return c.toFixed(3).slice(1);
}

console.log(
    battingAvg([
        [0, 0],
        [1, 3],
        [2, 2],
        [0, 4],
        [1, 5],
    ])
);
console.log(
    battingAvg([
        [2, 5],
        [2, 3],
        [0, 3],
        [1, 5],
        [2, 4],
    ])
);
console.log(
    battingAvg([
        [2, 3],
        [1, 5],
        [2, 4],
        [1, 5],
        [0, 5],
    ])
);

// ➞ ".286"
// ➞ ".350"
// ➞ ".273"