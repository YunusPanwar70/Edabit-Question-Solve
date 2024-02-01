function ageDifference(ages) {
    let maxAge = ages[0];
    let minAge = ages[0];

    for (let age of ages) {
        if (age > maxAge) {
            maxAge = age;
        }
        if (age < minAge) {
            minAge = age;
        }
    }

    if (maxAge === minAge) {
        return "No age difference between spouses.";
    } else {
        const difference = maxAge - minAge;
        return `${difference} year${difference === 1 ? '' : 's'}`;
    }
}

console.log(ageDifference([29, 1, 6, 8, 28])); // ➞ "1 year"
console.log(ageDifference([43, 86, 49, 86])); // ➞ "No age difference between spouses."
console.log(ageDifference([2, 4, 6, 32, 27])); // ➞ "5 years"