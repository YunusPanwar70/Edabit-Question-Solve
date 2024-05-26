//  objects ko combine karna (merge karna). 
function returnTarget(target, source) {
    return Object.assign(target, source)
}
console.log(returnTarget({ a: 1, b: 2 }, { b: 4, c: 5 }));

// b ki value source object se overwrite ho gayi hai.