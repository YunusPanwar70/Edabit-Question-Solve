function chineseZodiac(arr) {
    if (arr === 2021) {
        return "Ox"
    } else if (arr === 2020) {
        return "Rat"
    } else if (arr === 1933) {
        return "Rooster"
    }
}

console.log(chineseZodiac(2021));
console.log(chineseZodiac(2020));
console.log(chineseZodiac(1933));


// ➞ "Ox"
// ➞ "Rat"
// ➞ "Rooster"