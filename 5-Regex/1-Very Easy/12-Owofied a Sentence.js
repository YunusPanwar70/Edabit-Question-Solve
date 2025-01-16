// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

function owofied(str) {
    str = str.replace(/i/g, "wi");
    str = str.replace(/e/g, "we");
    return str + " owo";
}
console.log(owofied("I'm gonna ride 'til I can't no more"));
console.log(owofied("Do you ever feel like a plastic bag"));
console.log(owofied("Cause baby you're a firework"));
// ➞ "I'm gonna rwidwe 'twil I can't no morwe owo"
// ➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"
// ➞ "Causwe baby you'rwe a fwirwework owo"

// Notes
// Don't forget to return the value!
// There's a space in front of owo!;;;