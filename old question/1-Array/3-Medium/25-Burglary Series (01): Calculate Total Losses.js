// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// function stolenItems(obj) {
//     const value = Object.values(obj)
//     if (value.length === 0) {
//         return 'Lucky you!'
//     }
//     return value.reduce((acc, val) => acc + val)
// }

function stolenItems(obj) {
    const value = Object.values(obj)
    if (value.length === 0) {
        return 'Lucky you!'
    }
    let total = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            total += obj[key];
        }
    }
    return total
}
console.log(stolenItems({ tv: 30, skate: 20, stereo: 50, }));
console.log(stolenItems({ painting: 20000, }));
console.log(stolenItems({}));
// ➞ 100
// ➞ 20000
// ➞ "Lucky you!"