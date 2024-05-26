// Merging objects
function merging(obj1, obj2, obj3) {
    return Object.assign(obj1, obj2, obj3);
}
console.log(merging({ a: 1 }, { b: 2 }, { c: 3 }));