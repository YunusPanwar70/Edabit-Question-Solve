function filterArray(arr) {
    return arr.filter((item) => typeof item === "number" && !isNaN(item));
};
console.log(filterArray([1, 2, 3, "a", "b", 4]));
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
console.log(filterArray(["Nothing", "here"]));

// ➞ [1, 2, 3, 4]
// ➞ [0, 1729]
// ➞ []


// const a = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number" && !isNaN(arr[i])) {
//         a.push(arr[i]);
//     }
// }
// return a;