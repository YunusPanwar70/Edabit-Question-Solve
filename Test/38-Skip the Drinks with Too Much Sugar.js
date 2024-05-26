function skipTooMuchSugarDrinks(arr) {
    let coldDrinks = ['fanta', 'cola'];
    return arr.filter((item) =>! coldDrinks.includes(item))
}
console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));
// ➞ ["water"]
// ➞ []
// ➞ ["lemonade", "beer", "water"]