// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

function matchLastItem(arr) {
    let one = arr.slice(0, -1).join('')
    return one === String(arr[arr.length - 1])
}
console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
console.log(matchLastItem([1, 1, 1, "11"]));
console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));
// ➞ true
// The last item is the rest joined.
// ➞ false
// The last item should be "111".
// ➞ true