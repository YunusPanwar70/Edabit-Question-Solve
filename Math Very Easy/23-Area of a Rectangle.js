function area(h, w) {
    if (h <= 0 || w <= 0) {
        return -1;
    } else {
        return h * w;
    }

}

console.log(area(3, 4));
console.log(area(10, 11));
console.log(area(-1, 5));
console.log(area(0, 2));

// ➞ 12
// ➞ 110
// ➞ -1
// ➞ -1