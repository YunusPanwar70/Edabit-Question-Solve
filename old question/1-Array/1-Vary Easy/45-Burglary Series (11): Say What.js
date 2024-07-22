function sayWhat(obj) {
    let keys = Object.keys(obj);
    let res = "";
    for (let i = 0; i < keys.length; i++) {
        let currentValue = obj[keys[i]];
        res = res + " " + currentValue;
    }
    return res + " " + obj[2]
}
console.log(sayWhat({ 1: "Mommy", 2: "please", 3: "help" }));
console.log(sayWhat({ 1: "Me", 2: "innocent", 3: "is" }));
console.log(sayWhat({ 1: "Must", 2: "lawyer", 3: "call" }));
// ➞ "Mommy please help please"
// ➞ "Me innocent is innocent"
// ➞ "Must lawyer call lawyer"