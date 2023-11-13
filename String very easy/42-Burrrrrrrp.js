function longBurp(arr) {
    if (arr < 1) {
        return "Burp";
    }
    return "Bu" + "r".repeat(arr) + "p";
}

console.log(longBurp(3));
console.log(longBurp(5));
console.log(longBurp(9));


// ➞ "Burrrp"
// ➞ "Burrrrrp"
// ➞ "Burrrrrrrrrp"