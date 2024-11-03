// Given an array of ingredients i and a string flavour f as input, create a function that returns the array but with the elements bread around the selected ingredient.

function makeSandwich(ingredients, flavour) {

}
console.log(makeSandwich(["tuna", "ham", "tomato"], "ham"));
console.log(makeSandwich(["cheese", "lettuce"], "cheese"));
console.log(makeSandwich(["ham", "ham"], "ham"));

// ➞ ["tuna", "bread", "ham", "bread", "tomato"]
// ➞ ["bread", "cheese", "bread", "lettuce"]
// ➞ ["bread", "ham", "bread", "bread", "ham", "bread"]

// Notes
// You will always get valid inputs.
// Make two separate sandwiches if two of the same elements are next to each other (see example #3).