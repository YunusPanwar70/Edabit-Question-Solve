function hasSameBread(arr1, arr2) {
    if (arr1[0] && arr2[0]) {
        return true
    } else {
        return false
    }
}

console.log(hasSameBread(
    ["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"]
));

console.log(hasSameBread(
    ["brown bread", "chicken", "brown bread"], ["white bread", "chicken", "white bread"]
));

console.log(hasSameBread(
    ["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"]
));

// ➞ true
// ➞ false
// ➞ false