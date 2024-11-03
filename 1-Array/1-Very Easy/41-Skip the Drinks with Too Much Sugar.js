// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta

// function skipTooMuchSugarDrinks(arr) {
//     let coldDrinks = ['fanta', 'cola'];
//     return arr.filter((item) => !coldDrinks.includes(item))
// }

function skipTooMuchSugarDrinks(arr) {
    let coldDrinks = ['fanta', 'cola'];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!coldDrinks.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));

//➞ ["water"]
//➞ []
//➞ ["lemonade", "beer", "water"]

// Notes
// The function returns an array of strings.
// All drink names are in lowercase.