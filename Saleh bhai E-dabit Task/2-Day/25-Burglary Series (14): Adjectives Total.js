function totalAmountAdjectives(obj) {
    return Object.values(obj).length;

}
console.log(totalAmountAdjectives({ a: "moron" }));
console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }));
console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }));
// ➞ 1
// ➞ 3
// ➞ 4