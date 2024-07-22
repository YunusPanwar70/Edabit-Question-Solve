// function totalAmountAdjectives(obj) {
// return Object.values(obj).length;
// }

function totalAmountAdjectives(obj) {
    let count = 0;
    let i;
    for (const key in obj) {
        key[i] += count
        count++
    }
    return count
}
console.log(totalAmountAdjectives({ a: "moron" }));
console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }));
console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }));
// ➞ 1
// ➞ 3
// ➞ 4