// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// function totalAmountAdjectives(obj) {
//     return Object.keys(obj).length
// }

// function totalAmountAdjectives(obj) {
//     return Object.values(obj).length
// }

// function totalAmountAdjectives(obj) {
//     return Object.entries(obj).length
// }

function totalAmountAdjectives(obj) {
    let count = 0;
    for (const i in obj) {
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