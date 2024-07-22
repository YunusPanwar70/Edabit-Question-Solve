function getFillings(arr) {
    return arr.slice(1, 4);
}
console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"]));
console.log(getFillings(["bread", "sausage", "tomato", "bread"]));
console.log(getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]));
// ➞ ["ham", "cheese", "ham"]
// ➞ ["sausage", "tomato"]
// ➞ ["lettuce", "bacon", "tomato"]