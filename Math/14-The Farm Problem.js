function animals(chickens, cows, pigs) {
    const chickensleg = 2
    const cowsleg = 4
    const pigsleg = 4

    const total = (chickens * chickensleg) + (cows * cowsleg) + (pigs * pigsleg)

    return total
}

console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));


// ➞ 36
// ➞ 22
// ➞ 50