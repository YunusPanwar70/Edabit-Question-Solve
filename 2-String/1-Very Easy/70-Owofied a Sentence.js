// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

function owofied(str) {
    const changeValue = {
        "i": "wi",
        "e": "we"
    }
    return str.split('').map(char => changeValue[char] || char).join('') + " owo"
}
console.log(owofied("I'm gonna ride 'til I can't no more"));
console.log(owofied("Do you ever feel like a plastic bag"));
console.log(owofied("Cause baby you're a firework"));
// ➞ "I'm gonna rwidwe 'twil I can't no morwe owo"
// ➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"
// ➞ "Causwe baby you'rwe a fwirwework owo"