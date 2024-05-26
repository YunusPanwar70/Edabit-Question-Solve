// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

function totalAmountAdjectives(obj) {
    return Object.values(obj).length;
}
console.log(totalAmountAdjectives({ a: "moron" }));
console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }));
console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }));
// ➞ 1
// ➞ 3
// ➞ 4