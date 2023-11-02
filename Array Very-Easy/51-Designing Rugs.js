function makeRug(m, n, s = '#') {
    return Array.from({ length: m }, () => s.repeat(n));
}

console.log(makeRug(3, 5));
console.log(makeRug(3, 5, '$'));
console.log(makeRug(2, 2, 'A'));

// ➞[
//     "#####",
//     "#####",
//     "#####"
//   ]
// ➞[
//     "$$$$$",
//     "$$$$$",
//     "$$$$$"
//   ]
// ➞[
//     "AA",
//     "AA"
//   ]