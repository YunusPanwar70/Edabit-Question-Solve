function skipTooMuchSugarDrinks(drink) {
    const sugar = ["fanta", "cola"];

    const filterDrinks = drink.filter((drink) => !sugar.includes(drink));
    return filterDrinks;
};

console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));

// ➞ ["water"]
// ➞ []
// ➞ ["lemonade", "beer", "water"]