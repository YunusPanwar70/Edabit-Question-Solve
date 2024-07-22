function hasSameBread(arr1, arr2) {
    return arr1[0] === arr2[0] && arr1[arr1.length - 1] === arr2[arr1.length - 1]
}

console.log(hasSameBread(["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"]));
console.log(hasSameBread(["brown bread", "chicken", "brown bread"], ["white bread", "chicken", "white bread"]));
console.log(hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"]));
//   ➞ true
//   ➞ false
//   ➞ false