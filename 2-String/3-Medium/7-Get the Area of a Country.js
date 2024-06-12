// Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

function areaOfCountry(country, area) {
    const totalWorldLandmass = 148940000;
    const proportion = (area / totalWorldLandmass) * 100;
    return `${country} is ${proportion.toFixed(2)}% of the total world's landmass`;
}
console.log(areaOfCountry("Russia", 17098242));
console.log(areaOfCountry("USA", 9372610));
console.log(areaOfCountry("Iran", 1648195));
// ➞ "Russia is 11.48% of the total world's landmass"
// ➞ "USA is 6.29% of the total world's landmass"
// ➞ "Iran is 1.11% of the total world's landmass" 