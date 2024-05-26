function findIndex(arr,val) {
    // return arr.indexOf(val)
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const currentEle = arr[i];
        if(currentEle === val) {
            count++;
        }
    }
    return count;
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

// ➞ 2
// ➞ 1
// ➞ 3
// ➞ 0