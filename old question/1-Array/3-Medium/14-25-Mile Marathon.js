// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

// Return true if the marathon is 25 miles long, otherwise, return false.

// function marathonDistance(arr) {
//     let mileRun = arr.reduce((acc, val) => acc + Math.abs(val), 0)
//     return mileRun === 25
// }

function marathonDistance(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += Math.abs(arr[i])
    }
    return count === 25
}
console.log(marathonDistance([1, 2, 3, 4]));
console.log(marathonDistance([1, 9, 5, 8, 2]));
console.log(marathonDistance([-6, 15, 4]));
// ➞ false
// ➞ true
// ➞ true