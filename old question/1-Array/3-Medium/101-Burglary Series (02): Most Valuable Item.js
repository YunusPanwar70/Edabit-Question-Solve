// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

function mostExpensiveItem(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let max = Math.max(...values);
    for (let i = 0; i < keys.length; i++) {
        if (obj[keys[i]] === max) {
            return keys[i]
        }
    }
}
console.log(mostExpensiveItem({ piano: 2000, }));
console.log(mostExpensiveItem({ tv: 30, skate: 20, }));
console.log(mostExpensiveItem({ tv: 30, skate: 20, stereo: 50, }));


// ➞ "piano"
// ➞ "tv"
// ➞ "stereo"


// Notes
// There will only be one most valuable item (no ties).
// The object will always contain at least one item (no empty objects).