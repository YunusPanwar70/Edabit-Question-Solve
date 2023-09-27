function mod(a, b) {
    if (b == 0) {
        return "no"
    }
    let c = Math.floor(a / b)
    let d = a - (c * b)
    return d
}

console.log(mod(5, 2));
console.log(mod(218, 5));
console.log(mod(6, 3));


// ➞ 1
// ➞ 3
// ➞ 0