// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// function calculateLosses(obj) {
//     return Object.keys(obj).length === 0 ? "Lucky you!" : Object.values(obj).reduce((acc, val) => acc + val, 0)
// }

function calculateLosses(obj) {
    if (Object.keys(obj).length === 0) {
        return "Lucky you!";
    }
    let getValue = 0;
    for (const key in obj) {
        getValue += obj[key]
    }
    return getValue
}
console.log(calculateLosses({ tv: 30, skate: 20, stereo: 50, }));
console.log(calculateLosses({ painting: 20000, }));
console.log(calculateLosses({}));
// ➞ 100
// ➞ 20000
// ➞ "Lucky you!"