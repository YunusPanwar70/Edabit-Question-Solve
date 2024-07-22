// Remove enemies from the array of people, even if the enemy shows up twice.

// function removeEnemies(arr1, arr2) {
// return arr1.filter((item) => !arr2.includes(item))
// }
function removeEnemies(arr1, arr2) {
    return arr1.splice(arr2)
}
console.log(removeEnemies(["Fred"], []));
console.log(removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]));
console.log(removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]));
// ➞ ["Fred"]
// ➞ ["Adam", "Tanya"]
// ➞ ["Emily", "Steve"]