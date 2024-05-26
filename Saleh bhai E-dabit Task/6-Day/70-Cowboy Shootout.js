function rogerShots(arr) {
    return arr.filter((item)=>item==='Bang!').length    
}
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]));
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]));
console.log(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]));

// ➞ 3
// ➞ 2.5
// ➞ 2