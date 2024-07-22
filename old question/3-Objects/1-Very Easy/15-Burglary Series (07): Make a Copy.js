// Your spouse wants a copy of the stolen items. Given an object containing the stolen items, return a copy of that list.

function copyItem(obj) {
    return Object.assign({}, obj);
}
// function copyItem(obj) {
//     return { ...obj }
// }
console.log(copyItem({ piano: 100, tv: 50 }));
// ➞ { piano: 100, tv: 50 }