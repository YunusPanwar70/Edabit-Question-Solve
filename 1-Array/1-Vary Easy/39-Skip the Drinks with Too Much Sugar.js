function skipTooMuchSugarDrinks(str) {
    let sugarLevel = ['fanta', 'cola'];
    return str.filter((item) => !sugarLevel.includes(item))
}
console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));
// ➞ ["water"]
// ➞ []
// ➞ ["lemonade", "beer", "water"]