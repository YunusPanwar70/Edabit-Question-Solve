// Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.

// function removeEntry(obj, itemName) {
//     const newObj = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key) && key !== itemName) {
//             newObj[key] = obj[key]
//         }
//     }
//     return newObj
// }

// function removeEntry(obj, itemName) {
//     const newObj = { ...obj };
//     delete newObj[itemName];
//     return newObj;
// }

function removeEntry(obj, itemName) {
    const newObj = Object.assign({}, obj);
    delete newObj[itemName];
    return newObj;
}
console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"));
console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror"));
// ➞ { piano: 300, tv: 100 }
// ➞ { painting: 1 }