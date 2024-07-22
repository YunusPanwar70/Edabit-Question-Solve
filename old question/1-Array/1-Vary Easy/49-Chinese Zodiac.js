function chineseZodiac(num) {
 const zodiad = {
    2021:'Ox',
    2020: 'Rat',
    1993: 'Rooster'
 }   
 return zodiad[num];
}
console.log(chineseZodiac(2021));
console.log(chineseZodiac(2020));
console.log(chineseZodiac(1933));
// ➞ "Ox"
// ➞ "Rat"
// ➞ "Rooster"