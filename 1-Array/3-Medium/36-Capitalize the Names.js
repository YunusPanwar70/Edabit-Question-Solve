// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

// function capMe(arr) {
//     return arr.map((name) => { return name.charAt(0).toUpperCase() + name.slice(1) })
// }

function capMe(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const name = arr[i];
        const capitalized = name.charAt(0).toUpperCase() + name.slice(1)
        result.push(capitalized)
    }
    return result
}
console.log(capMe(["mavis", "senaida", "letty"]));
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]));
console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]));
// ➞ ["Mavis", "Senaida", "Letty"]
// ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
// ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]