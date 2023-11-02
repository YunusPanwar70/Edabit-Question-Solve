function greaterThanOne(str) {
    const [a, b] = str.split("/").map(Number);
    if (a === 0) {
        return false
    }
    return b > a
}

console.log(greaterThanOne("1/2"));
console.log(greaterThanOne("7/4"));
console.log(greaterThanOne("10/10"));


// ➞ false
// ➞ true
// ➞ false