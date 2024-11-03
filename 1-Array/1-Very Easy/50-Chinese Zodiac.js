// Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.

function chineseZodiac(birthYear) {
    switch (birthYear) {
        case 2021: return 'OX'
        case 2020: return 'Rat'
        case 1933: return 'Rooster'
    }
}
console.log(chineseZodiac(2021));
console.log(chineseZodiac(2020));
console.log(chineseZodiac(1933));
// ➞ "Ox"
// ➞ "Rat"
// ➞ "Rooster"

// Notes
// The list of animals used can vary slightly, so check the Resources tab for the list that you will need for this challenge.