// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.
function matchLastItem(arr) {
    return arr.reduce((acc, val) => acc.lenght === val.lenght)
}
console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
console.log(matchLastItem([1, 1, 1, "11"]));
console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));

// ➞ true
// The last item is the rest joined.
// ➞ false
// The last item should be "111".
// ➞ true