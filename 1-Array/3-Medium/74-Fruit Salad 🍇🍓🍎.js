// Fruit salads are served best when the fruits are sliced and diced into small chunks!

// For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

// Worked Example
// fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"
// Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// Final string: "apargrapepesple"

function fruitSalad(fruits) {
    // Function to slice and sort each fruit
    function sliceAndSort(fruit) {
        let halfLength = Math.floor(fruit.length / 2);
        let leftHalf = fruit.slice(0, halfLength);
        let rightHalf = fruit.slice(halfLength);
        return [leftHalf, rightHalf].sort().join('');
    }

    // Use flatMap to apply sliceAndSort to each fruit and join into a single array
    let salad = fruits.flatMap(sliceAndSort).join('');

    return salad;
}
console.log(fruitSalad(["apple", "pear", "grapes"]));
console.log(fruitSalad(["raspberries", "mango"]));
console.log(fruitSalad(["banana"]));

// ➞ "apargrapepesple"
// ➞ "erriesmangoraspb"
// ➞ "anaban"

// Notes
// If a fruit has an odd number of letters, make the right side larger than the left.
// For example: "apple" will be sliced into "ap" and "ple".
// All fruits will be given in lowercase.