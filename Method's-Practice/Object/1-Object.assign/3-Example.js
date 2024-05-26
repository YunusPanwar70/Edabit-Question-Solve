function clone(obj) {
    return Object.assign(obj);
}
console.log(clone({ a: 1, b: { c: 3 } }));