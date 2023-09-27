function calculateDifference(obj, arr) {
    let a = 0;
    for (const key in obj) {
        if (obj[key] > arr) {
            a += obj[key]
        }
    }
    return a - arr
}


console.log(calculateDifference({ "baseball bat": 20 }, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));


// ➞ 15
// ➞ 11
// ➞ 1