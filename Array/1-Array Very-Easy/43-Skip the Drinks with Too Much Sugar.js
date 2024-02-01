function skipTooMuchSugarDrinks(str) {
    const sugarDrink = ["fanta", "cola"];
    return str.filter((str) => !sugarDrink.includes((str)))
}

console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));





// ➞ ["water"]
// ➞ []
// ➞ ["lemonade", "beer", "water"]