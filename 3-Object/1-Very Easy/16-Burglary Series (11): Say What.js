// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

// function sayWhat(obj) {
//     return Object.values(obj).join(' ') + ' ' + obj[2]
// }

// function sayWhat(obj) {
//     let values = [];
//     let secoundKeyValue;
//     for (const key in obj) {
//         if (key === '2') {
//             secoundKeyValue = obj[key]
//         } else {
//             values.push(obj[key])
//         }
//     }
//     return values.join(' ') + ' ' + secoundKeyValue
// }

function sayWhat(obj) {
    let keys = Object.keys(obj);
    let res = "";
    for (let i = 0; i < keys.length; i++) {
        let currentValue = obj[keys[i]];
        res += " " + currentValue;
    }
    return res + " " + obj[2]
}
console.log(sayWhat({ 1: "Mommy", 2: "please", 3: "help" }));
console.log(sayWhat({ 1: "Me", 2: "innocent", 3: "is" }));
console.log(sayWhat({ 1: "Must", 2: "lawyer", 3: "call" }));

// ➞ "Mommy please help please"
// ➞ "Me innocent is innocent"
// ➞ "Must lawyer call lawyer"

// Notes
// The keys will always be 1: 2: 3: in this order. Don't mistake keys with indexes.
// I'm rating the challenge very easy because it can be hardcoded but try to do it dynamically, that is, imagine tomorrow you receive an object with 4 keys instead, your function would still work.
// Check the Resources for tips if needed.