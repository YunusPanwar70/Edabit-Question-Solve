function findBob(arr) {
    // let bobs = 'Bob';
    // return arr.indexOf(bobs);

    let bob = -1;
    arr.forEach((name, index) => {
        if (name === 'Bob') {
            bob = index
        }
    });
    return bob;
}
console.log(findBob(["Jimmy", "Layla", "Bob"]));
console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]));
console.log(findBob(["Jimmy", "Layla", "James"]));
// ➞ 2
// ➞ 0
// ➞ -1